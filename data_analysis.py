import pandas as pd
import numpy as np

#use this for table with average votescore by category
s_dat = pd.read_csv('/Users/Gisele/Downloads/gaza legislative scorecard/Smrithi Votesheet - Smrithi Votesheet.csv')
s_dat
bill_matrix1 = s_dat.iloc[:, 1]
vote_matrix = s_dat.iloc[:, 6:106]

bill_matrix_transposed1 = bill_matrix1.T

result = np.matmul(bill_matrix_transposed1, vote_matrix)
np.mean(result)

weight_matrix = s_dat.iloc[:, 1:6]
vote_matrix = s_dat.iloc[:, 6:106]

pivot_results = pd.DataFrame()
for i in range(weight_matrix.shape[1]):
    weight_column = weight_matrix.iloc[:, i]

    weighted_scores = vote_matrix.mul(weight_column, axis=0)
    average_scores = weighted_scores.mean(axis=1)

    pivot_results[f'Category_{i+1}'] = average_scores

pivot_results.index=s_dat.index

pivot_results