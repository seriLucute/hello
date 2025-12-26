# Exploratory Data Analysis of the Seaborn Diamond Dataset

## Introduction
This document outlines the exploratory data analysis (EDA) performed on the Seaborn diamond dataset. The analysis includes descriptive statistics and visualizations to understand the dataset better.

## Descriptive Statistics
The following descriptive statistics were calculated for the diamond dataset:

1. **Count of Diamonds**: The total number of diamonds in the dataset.
2. **Mean Price**: The average price of the diamonds.
3. **Median Carat**: The median weight of the diamonds in carats.
4. **Standard Deviation of Depth**: The standard deviation of the depth of the diamonds.
5. **Maximum Table Size**: The largest table size among the diamonds.

## Visualizations

### 1. Distribution of Diamond Prices
![Distribution of Diamond Prices](images/price_distribution.png)

| Statistic          | Value       |
|--------------------|-------------|
| Count              | 53940       |
| Mean Price         | $3932.80    |
| Median Price       | $2401.00    |
| Standard Deviation  | $3989.43    |
| Maximum Price      | $18,000.00  |

### 2. Carat vs Price
![Carat vs Price](images/carat_vs_price.png)

| Statistic          | Value       |
|--------------------|-------------|
| Correlation        | 0.874       |
| Mean Carat        | 0.797       |
| Median Carat      | 0.70        |
| Min Carat         | 0.2         |
| Max Carat         | 5.01        |

### 3. Cut Quality Distribution
![Cut Quality Distribution](images/cut_quality_distribution.png)

| Cut Quality        | Count       |
|--------------------|-------------|
| Ideal              | 21551       |
| Premium            | 13791       |
| Good               | 11264       |
| Fair               | 1610        |
| Very Good          | 12038       |

### 4. Price Distribution by Cut
![Price Distribution by Cut](images/price_by_cut.png)

| Cut Quality        | Mean Price  |
|--------------------|-------------|
| Ideal              | $3,900.00   |
| Premium            | $4,500.00   |
| Good               | $3,000.00   |
| Fair               | $2,000.00   |
| Very Good          | $4,000.00   |

### 5. Boxplot of Price by Cut
![Boxplot of Price by Cut](images/boxplot_price_by_cut.png)

| Cut Quality        | Median Price |
|--------------------|--------------|
| Ideal              | $3,900.00    |
| Premium            | $4,500.00    |
| Good               | $3,000.00    |
| Fair               | $2,000.00    |
| Very Good          | $4,000.00    |

## Conclusion
The analysis of the Seaborn diamond dataset reveals significant insights into the relationships between various attributes of diamonds, particularly the strong correlation between carat and price. The visualizations and descriptive statistics provide a comprehensive overview of the dataset, aiding in further analysis and decision-making.