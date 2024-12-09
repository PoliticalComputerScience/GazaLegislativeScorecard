import os
import numpy as np
import pandas as pd
import json
 
FOLDER_PATH = 'votesheets'

#combine newly converted csv files into a big data frame
dataframes = []

for filename in os.listdir(FOLDER_PATH):
    if filename.endswith('.csv'): 
        file_path = os.path.join(FOLDER_PATH, filename)
        df = pd.read_csv(file_path)
        dataframes.append(df)

combined_table = pd.concat(dataframes, ignore_index = True)


#perform matrix transformations on df
def vote_data_transform(data):
    bill_matrix = data.iloc[:, 2:7].fillna(value=0)
    vote_matrix = data.iloc[:, 7:107].fillna(value=0)

    print(bill_matrix)
    print(type(bill_matrix))

    print(vote_matrix)
    print(type(vote_matrix))

    bill_matrix_transposed = bill_matrix.T

    result = np.matmul(bill_matrix_transposed, vote_matrix)
    return result

new_mat = vote_data_transform(combined_table)
print(new_mat.columns)
print(new_mat[["Bernie Sanders (I-VT (D-VT))"]])

# Write output to json
largest_score = new_mat.abs().max().max()
scores = []
print(largest_score)
with open("scores.json", "w") as outfile:
    for senator in new_mat.columns:
        df_entry = new_mat[[senator]]

        name, state = senator.split('(', 1)
        print(name, type(name))
        print(state, type(state))

        weights = list((df_entry.values / largest_score).flatten())
        print(weights, type(weights))

        scores.append({
            "name": name[:-1],
            "state": state[:-1],
            "weights": weights,
            "score": 0
        })

    json.dump(scores, outfile)

# Write json to file:
REPLACE_LINE = 110

with open("src/App.js", "r+") as app_js:
    js_lines = app_js.readlines()
    js_lines[REPLACE_LINE] = "const initialSenators = " + str(scores) + ";"
    app_js.writelines(js_lines)
