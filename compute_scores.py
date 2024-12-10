import os
import numpy as np
import pandas as pd
import json
 
FOLDER_PATH = 'votesheets'

#combine newly converted csv files into a big data frame
dataframes = []

for filename in os.listdir(FOLDER_PATH):
    if filename.endswith('.xlsx'):
        file_path = os.path.join(FOLDER_PATH, filename)
        df = pd.read_excel(file_path)
        csv_filename = filename.replace('.xlsx', '.csv')
        csv_file_path = os.path.join(FOLDER_PATH, csv_filename)
        df.to_csv(csv_file_path, index=False)

for filename in os.listdir(FOLDER_PATH):
    if filename.endswith('.csv'): 
        file_path = os.path.join(FOLDER_PATH, filename)
        df = pd.read_csv(file_path)
        dataframes.append(df)

combined_table = pd.concat(dataframes, ignore_index = True)


#perform matrix transformations on df
def vote_data_transform(data):
    bill_matrix = data.iloc[:, 2:7].fillna(value=0.)
    vote_matrix = data.iloc[:, 7:107].fillna(value=0.)
    
    bill_matrix_transposed = bill_matrix.T

    result = np.matmul(bill_matrix_transposed, vote_matrix)
    return result

new_mat = vote_data_transform(combined_table)

# Write output to json
largest_score = new_mat.abs().max().max()
scores = []
with open("scores.json", "w") as outfile:
    for senator in new_mat.columns:
        df_entry = new_mat[[senator]]

        name, state = senator.split('(', 1)

        weights = list((df_entry.values / largest_score).flatten())

        scores.append({
            "name": name[:-1],
            "state": state[:-1],
            "weights": weights,
            "score": 0
        })

    json.dump(scores, outfile)

# Write json to file:
REPLACE_LINE = 109

with open("src/App.js", "r") as app_js:
    js_lines = app_js.readlines()
    js_lines[REPLACE_LINE] = "const initialSenators = " + str(scores) + ";"
    js_lines.insert(REPLACE_LINE + 1, "\n")

with open("src/App.js", "w") as app_js:
    app_js.writelines(js_lines)
