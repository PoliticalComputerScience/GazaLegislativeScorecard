library(Rvoteview)
read <- voteview_search("alltext:Gaza ", startdate = "2024-06-16", enddate = "2024-08-31")

# Assuming the bill ID is stored in the variable 'bill_id'
rollcall_data <- voteview_download(read$id[1:5])

# Extract the vote information for each senator

# Print the vote information
vote_data <- data.frame(names = rollcall_data$legis.long.dynamic$member_full,
vote = rollcall_data$legis.long.dynamic$cast_str)