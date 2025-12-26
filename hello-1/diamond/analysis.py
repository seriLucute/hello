import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the seaborn diamond dataset
diamonds = sns.load_dataset('diamonds')

# Descriptive statistics
descriptive_stats = diamonds.describe()

# Save descriptive statistics to a CSV file for reference
descriptive_stats.to_csv('diamond/descriptive_stats.csv')

# Visualization 1: Distribution of diamond prices
plt.figure(figsize=(10, 6))
sns.histplot(diamonds['price'], bins=30, kde=True)
plt.title('Distribution of Diamond Prices')
plt.xlabel('Price')
plt.ylabel('Frequency')
plt.savefig('diamond/images/price_distribution.png')
plt.show()

# Crosstab for price
price_crosstab = pd.crosstab(index=pd.cut(diamonds['price'], bins=5), columns='count')
print(price_crosstab)

# Visualization 2: Boxplot of price by cut
plt.figure(figsize=(10, 6))
sns.boxplot(x='cut', y='price', data=diamonds)
plt.title('Boxplot of Price by Cut')
plt.xlabel('Cut')
plt.ylabel('Price')
plt.savefig('diamond/images/boxplot_price_by_cut.png')
plt.show()

# Crosstab for cut and price
cut_price_crosstab = pd.pivot_table(diamonds, values='price', index='cut', aggfunc=['mean', 'median', 'std'])
print(cut_price_crosstab)

# Visualization 3: Scatter plot of carat vs price
plt.figure(figsize=(10, 6))
sns.scatterplot(x='carat', y='price', data=diamonds, hue='cut', alpha=0.6)
plt.title('Scatter Plot of Carat vs Price')
plt.xlabel('Carat')
plt.ylabel('Price')
plt.savefig('diamond/images/scatter_carat_vs_price.png')
plt.show()

# Crosstab for carat and price
carat_price_crosstab = pd.pivot_table(diamonds, values='price', index='carat', aggfunc=['mean', 'median', 'std'])
print(carat_price_crosstab)

# Visualization 4: Count plot of diamonds by cut
plt.figure(figsize=(10, 6))
sns.countplot(x='cut', data=diamonds)
plt.title('Count of Diamonds by Cut')
plt.xlabel('Cut')
plt.ylabel('Count')
plt.savefig('diamond/images/count_by_cut.png')
plt.show()

# Crosstab for cut counts
cut_count_crosstab = pd.crosstab(index=diamonds['cut'], columns='count')
print(cut_count_crosstab)

# Visualization 5: Pairplot of the dataset
sns.pairplot(diamonds, hue='cut')
plt.savefig('diamond/images/pairplot.png')
plt.show()

# Save the final descriptive statistics to a Markdown file
with open('diamond/analysis.md', 'w') as f:
    f.write('# Exploratory Data Analysis of Diamonds\n\n')
    f.write('## Descriptive Statistics\n')
    f.write(descriptive_stats.to_markdown())
    f.write('\n\n## Visualizations\n')
    f.write('### 1. Distribution of Diamond Prices\n')
    f.write('![Distribution of Diamond Prices](images/price_distribution.png)\n')
    f.write('Crosstab for Price:\n')
    f.write(price_crosstab.to_markdown())
    f.write('\n\n### 2. Boxplot of Price by Cut\n')
    f.write('![Boxplot of Price by Cut](images/boxplot_price_by_cut.png)\n')
    f.write('Crosstab for Cut and Price:\n')
    f.write(cut_price_crosstab.to_markdown())
    f.write('\n\n### 3. Scatter Plot of Carat vs Price\n')
    f.write('![Scatter Plot of Carat vs Price](images/scatter_carat_vs_price.png)\n')
    f.write('Crosstab for Carat and Price:\n')
    f.write(carat_price_crosstab.to_markdown())
    f.write('\n\n### 4. Count of Diamonds by Cut\n')
    f.write('![Count of Diamonds by Cut](images/count_by_cut.png)\n')
    f.write('Crosstab for Cut Counts:\n')
    f.write(cut_count_crosstab.to_markdown())
    f.write('\n\n### 5. Pairplot of the Dataset\n')
    f.write('![Pairplot](images/pairplot.png)\n')