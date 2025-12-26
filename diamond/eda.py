import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
import os

# 데이터셋 로드
diamonds = sns.load_dataset('diamonds')

# 기초 기술 통계
stats = diamonds.describe()

# 시각화 저장을 위한 이미지 폴더 생성
os.makedirs('images', exist_ok=True)

# 시각화 1: 가격 분포
plt.figure(figsize=(10, 6))
sns.histplot(diamonds['price'], bins=30, kde=True)
plt.title('Price Distribution')
plt.savefig('images/price_distribution.png')
plt.close()

# 시각화 2: 컷에 따른 가격 박스플롯
plt.figure(figsize=(10, 6))
sns.boxplot(x='cut', y='price', data=diamonds)
plt.title('Boxplot of Prices by Cut')
plt.savefig('images/boxplot_prices_by_cut.png')
plt.close()

# 시각화 3: 캐럿과 가격의 산점도
plt.figure(figsize=(10, 6))
sns.scatterplot(x='carat', y='price', data=diamonds)
plt.title('Carat vs Price')
plt.savefig('images/carat_vs_price.png')
plt.close()

# 시각화 4: 컷에 따른 다이아몬드 수
plt.figure(figsize=(10, 6))
sns.countplot(x='cut', data=diamonds)
plt.title('Count of Diamonds by Cut')
plt.savefig('images/countplot_diamonds_by_cut.png')
plt.close()

# 시각화 5: 다이아몬드의 페어플롯
plt.figure(figsize=(10, 6))
sns.pairplot(diamonds)
plt.savefig('images/pairplot_diamonds.png')
plt.close()

# 컷에 따른 가격의 피벗 테이블
pivot_table = diamonds.pivot_table(values='price', index='cut', aggfunc='mean')

# 분석 내용을 마크다운 파일로 저장
with open('analysis.md', 'w') as f:
    f.write('# EDA on Diamonds Dataset\n')
    f.write('## Basic Statistics\n')
    f.write(stats.to_markdown() + '\n')
    f.write('## Visualizations\n')
    f.write('1. ![Price Distribution](images/price_distribution.png)\n')
    f.write('2. ![Boxplot of Prices by Cut](images/boxplot_prices_by_cut.png)\n')
    f.write('3. ![Carat vs Price](images/carat_vs_price.png)\n')
    f.write('4. ![Count of Diamonds by Cut](images/countplot_diamonds_by_cut.png)\n')
    f.write('5. ![Pairplot of Diamonds](images/pairplot_diamonds.png)\n')
    f.write('## Pivot Table\n')
    f.write(pivot_table.to_markdown() + '\n')
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
import os

# 데이터셋 로드
diamonds = sns.load_dataset('diamonds')

# 기초 기술 통계
stats = diamonds.describe()

# 시각화 저장을 위한 이미지 폴더 생성
os.makedirs('images', exist_ok=True)

# 시각화 1: 가격 분포
plt.figure(figsize=(10, 6))
sns.histplot(diamonds['price'], bins=30, kde=True)
plt.title('Price Distribution')
plt.savefig('images/price_distribution.png')
plt.close()

# 시각화 2: 카라트와 가격의 관계
plt.figure(figsize=(10, 6))
sns.scatterplot(data=diamonds, x='carat', y='price')
plt.title('Carat vs Price')
plt.savefig('images/carat_vs_price.png')
plt.close()

# 시각화 3: 컷에 따른 가격 분포
plt.figure(figsize=(10, 6))
sns.boxplot(data=diamonds, x='cut', y='price')
plt.title('Price Distribution by Cut')
plt.savefig('images/price_by_cut.png')
plt.close()

# 시각화 4: 색상에 따른 가격 분포
plt.figure(figsize=(10, 6))
sns.boxplot(data=diamonds, x='color', y='price')
plt.title('Price Distribution by Color')
plt.savefig('images/price_by_color.png')
plt.close()

# 시각화 5: 투명도에 따른 가격 분포
plt.figure(figsize=(10, 6))
sns.boxplot(data=diamonds, x='clarity', y='price')
plt.title('Price Distribution by Clarity')
plt.savefig('images/price_by_clarity.png')
plt.close()

# 피봇 테이블 생성
pivot_table = diamonds.pivot_table(values='price', index='cut', columns='color', aggfunc='mean')

# 마크다운 파일로 저장
with open('eda_report.md', 'w') as f:
    f.write('# EDA Report on Diamonds\n\n')
    f.write('## Basic Statistics\n')
    f.write(f'{stats}\n\n')
    f.write('## Visualizations\n')
    f.write('![Price Distribution](images/price_distribution.png)\n')
    f.write('![Carat vs Price](images/carat_vs_price.png)\n')
    f.write('![Price by Cut](images/price_by_cut.png)\n')
    f.write('![Price by Color](images/price_by_color.png)\n')
    f.write('![Price by Clarity](images/price_by_clarity.png)\n')
    f.write('## Pivot Table\n')
    f.write(f'{pivot_table}\n')
