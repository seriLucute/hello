# Exploratory Data Analysis (EDA) Report on Diamonds Dataset

## Introduction
This report presents the exploratory data analysis (EDA) conducted on the Seaborn diamonds dataset. The analysis includes basic statistical summaries, visualizations, and insights derived from the data.

## Basic Statistical Analyses

1. **Summary Statistics**
   - The summary statistics provide an overview of the dataset, including count, mean, standard deviation, min, max, and quartiles for each numerical feature.

   | Feature        | Count | Mean   | Std Dev | Min   | 25%   | 50%   | 75%   | Max   |
   |----------------|-------|--------|---------|-------|-------|-------|-------|-------|
   | carat          | 53940 | 0.7979 | 0.4740  | 0.200 | 0.400 | 0.700 | 1.040 | 5.010 |
   | depth          | 53940 | 61.29  | 1.43    | 43.00 | 59.90 | 61.80 | 62.80 | 79.00 |
   | table          | 53940 | 57.46  | 2.23    | 43.00 | 56.00 | 57.00 | 59.00 | 95.00 |
   | price          | 53940 | 3932.80| 3989.43 | 326   | 950   | 2401  | 5325  | 18823 |
   | x              | 53940 | 5.73   | 1.14    | 3.80  | 5.00  | 5.70  | 6.40  | 10.74 |
   | y              | 53940 | 5.73   | 1.14    | 1.00  | 4.70  | 5.70  | 6.20  | 58.90 |
   | z              | 53940 | 3.53   | 0.70    | 1.00  | 2.90  | 3.50  | 4.00  | 31.80 |

2. **Correlation Matrix**
   - The correlation matrix shows the relationships between numerical features.

   | Feature | carat | depth | table | price | x     | y     | z     |
   |---------|-------|-------|-------|-------|-------|-------|-------|
   | carat   | 1.00  | -0.10 | -0.03 | 0.92  | 0.99  | 0.99  | 0.98  |
   | depth   | -0.10 | 1.00  | 0.20  | -0.01 | -0.01 | -0.01 | -0.01 |
   | table   | -0.03 | 0.20  | 1.00  | -0.07 | -0.07 | -0.07 | -0.07 |
   | price   | 0.92  | -0.01 | -0.07 | 1.00  | 0.92  | 0.92  | 0.92  |
   | x       | 0.99  | -0.01 | -0.07 | 0.92  | 1.00  | 1.00  | 0.99  |
   | y       | 0.99  | -0.01 | -0.07 | 0.92  | 1.00  | 1.00  | 0.99  |
   | z       | 0.98  | -0.01 | -0.07 | 0.92  | 0.99  | 0.99  | 1.00  |

3. **Count of Diamonds by Cut**
   - The count of diamonds categorized by cut type.

   | Cut        | Count |
   |------------|-------|
   | Ideal      | 21551 |
   | Premium    | 13791 |
   | Good       | 9125  |
   | Fair       | 1610  |
   | Very Good  | 12053 |

4. **Count of Diamonds by Color**
   - The count of diamonds categorized by color.

   | Color | Count |
   |-------|-------|
   | D     |  1271 |
   | E     |  9797 |
   | F     |  9530 |
   | G     |  11252|
   | H     |  10730|
   | I     |  10766|
   | J     |  1644 |

5. **Count of Diamonds by Clarity**
   - The count of diamonds categorized by clarity.

   | Clarity    | Count |
   |------------|-------|
   | IF         |  1790 |
   | VVS1       |  3258 |
   | VVS2       |  4580 |
   | VS1        |  8171 |
   | VS2        |  10974|
   | SI1        |  13065|
   | SI2        |  13091|
   | I1         |  741 |

## Visualizations

1. **Price Distribution**
   - ![Price Distribution](images/price_distribution.png)
   - The histogram shows the distribution of diamond prices.

2. **Carat vs Price**
   - ![Carat vs Price](images/carat_vs_price.png)
   - A scatter plot illustrating the relationship between carat weight and price.

3. **Boxplot of Price by Cut**
   - ![Boxplot of Price by Cut](images/boxplot_price_by_cut.png)
   - A boxplot showing the price distribution across different cut categories.

4. **Count of Diamonds by Cut**
   - ![Count of Diamonds by Cut](images/count_by_cut.png)
   - A bar chart displaying the count of diamonds for each cut type.

5. **Correlation Heatmap**
   - ![Correlation Heatmap](images/correlation_heatmap.png)
   - A heatmap visualizing the correlation between numerical features.

## Conclusion
The exploratory data analysis of the diamonds dataset reveals significant insights into the characteristics and pricing of diamonds. The visualizations and statistical analyses provide a comprehensive understanding of the dataset, which can be useful for further analysis or decision-making in the diamond industry.