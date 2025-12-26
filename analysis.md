# EDA on Diamonds Dataset
## Basic Statistics
|       |        carat |       depth |       table |    price |           x |           y |            z |
|:------|-------------:|------------:|------------:|---------:|------------:|------------:|-------------:|
| count | 53940        | 53940       | 53940       | 53940    | 53940       | 53940       | 53940        |
| mean  |     0.79794  |    61.7494  |    57.4572  |  3932.8  |     5.73116 |     5.73453 |     3.53873  |
| std   |     0.474011 |     1.43262 |     2.23449 |  3989.44 |     1.12176 |     1.14213 |     0.705699 |
| min   |     0.2      |    43       |    43       |   326    |     0       |     0       |     0        |
| 25%   |     0.4      |    61       |    56       |   950    |     4.71    |     4.72    |     2.91     |
| 50%   |     0.7      |    61.8     |    57       |  2401    |     5.7     |     5.71    |     3.53     |
| 75%   |     1.04     |    62.5     |    59       |  5324.25 |     6.54    |     6.54    |     4.04     |
| max   |     5.01     |    79       |    95       | 18823    |    10.74    |    58.9     |    31.8      |
## Visualizations
1. ![Price Distribution](images/price_distribution.png)
2. ![Boxplot of Prices by Cut](images/boxplot_prices_by_cut.png)
3. ![Carat vs Price](images/carat_vs_price.png)
4. ![Count of Diamonds by Cut](images/countplot_diamonds_by_cut.png)
5. ![Pairplot of Diamonds](images/pairplot_diamonds.png)
## Pivot Table
| cut       |   price |
|:----------|--------:|
| Ideal     | 3457.54 |
| Premium   | 4584.26 |
| Very Good | 3981.76 |
| Good      | 3928.86 |
| Fair      | 4358.76 |
