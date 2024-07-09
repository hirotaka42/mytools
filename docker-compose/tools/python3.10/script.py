import pandas as pd
import os

output_dir = 'output'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)


data = {
    'Name': ['John Doe', 'Jane Smith', 'Bob Johnson', 'Sarah Lee'],
    'Age': [35, 28, 42, 31],
    'City': ['New York', 'Los Angeles', 'Chicago', 'Houston']
}
df = pd.DataFrame(data)

# CSV ファイルの書き込み（output ディレクトリ内）
csv_file_path = os.path.join(output_dir, 'sample.csv')
df.to_csv(csv_file_path, index=False)

print('CSV file "sample.csv" created successfully.')
