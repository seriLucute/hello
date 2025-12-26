import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

def load_data(filepath):
    """Load the diamond dataset from a CSV file."""
    return pd.read_csv(filepath)

def basic_statistics(df):
    """Calculate basic statistics for the dataset."""
    stats = {
        'mean': df.mean(),
        'median': df.median(),
        'std_dev': df.std(),
        'min': df.min(),
        'max': df.max()
    }
    return stats

def visualize_price_distribution(df):
    """Visualize the distribution of diamond prices."""
    plt.figure(figsize=(10, 6))
    sns.histplot(df['price'], bins=30, kde=True)
    plt.title('Distribution of Diamond Prices')
    plt.xlabel('Price')
    plt.ylabel('Frequency')
    plt.savefig('images/price_distribution.png')
    plt.close()

def visualize_carat_vs_price(df):
    """Visualize the relationship between carat and price."""
    plt.figure(figsize=(10, 6))
    sns.scatterplot(data=df, x='carat', y='price', hue='cut', alpha=0.7)
    plt.title('Carat vs Price of Diamonds')
    plt.xlabel('Carat')
    plt.ylabel('Price')
    plt.savefig('images/carat_vs_price.png')
    plt.close()

def visualize_cut_distribution(df):
    """Visualize the distribution of diamond cuts."""
    plt.figure(figsize=(10, 6))
    sns.countplot(data=df, x='cut')
    plt.title('Distribution of Diamond Cuts')
    plt.xlabel('Cut')
    plt.ylabel('Count')
    plt.savefig('images/cut_distribution.png')
    plt.close()

def visualize_color_vs_price(df):
    """Visualize the relationship between color and price."""
    plt.figure(figsize=(10, 6))
    sns.boxplot(data=df, x='color', y='price')
    plt.title('Price Distribution by Diamond Color')
    plt.xlabel('Color')
    plt.ylabel('Price')
    plt.savefig('images/color_vs_price.png')
    plt.close()

def visualize_clarity_vs_price(df):
    """Visualize the relationship between clarity and price."""
    plt.figure(figsize=(10, 6))
    sns.boxplot(data=df, x='clarity', y='price')
    plt.title('Price Distribution by Diamond Clarity')
    plt.xlabel('Clarity')
    plt.ylabel('Price')
    plt.savefig('images/clarity_vs_price.png')
    plt.close()

def main():
    # Load the dataset
    df = load_data('data/diamonds.csv')

    # Perform basic statistics
    stats = basic_statistics(df)

    # Generate visualizations
    visualize_price_distribution(df)
    visualize_carat_vs_price(df)
    visualize_cut_distribution(df)
    visualize_color_vs_price(df)
    visualize_clarity_vs_price(df)

    # Save statistics to markdown
    with open('EDA_report.md', 'w') as f:
        f.write('# Exploratory Data Analysis of Diamonds\n\n')
        f.write('## Basic Statistics\n')
        for key, value in stats.items():
            f.write(f'### {key.capitalize()}\n')
            f.write(value.to_string() + '\n\n')
        f.write('## Visualizations\n')
        f.write('![Price Distribution](images/price_distribution.png)\n')
        f.write('![Carat vs Price](images/carat_vs_price.png)\n')
        f.write('![Cut Distribution](images/cut_distribution.png)\n')
        f.write('![Color vs Price](images/color_vs_price.png)\n')
        f.write('![Clarity vs Price](images/clarity_vs_price.png)\n')

if __name__ == "__main__":
    main()