#!/usr/bin/env python3
import os
from pathlib import Path
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np


def ensure_dir(path):
    """디렉토리가 존재하지 않으면 생성합니다."""
    Path(path).mkdir(parents=True, exist_ok=True)


def save_fig(fig, path):
    """플롯을 정리하고 파일로 저장한 뒤 닫습니다."""
    fig.tight_layout()
    fig.savefig(path, dpi=150)
    plt.close(fig)


def pivot_to_md(df, title=None):
    """피벗/요약표를 마크다운 문자열로 변환합니다. 제목을 전달하면 제목을 추가합니다."""
    if title:
        return f"### {title}\n\n" + df.to_markdown(index=True) + "\n\n"
    return df.to_markdown(index=True) + "\n\n"


def main():
    out_dir = Path(__file__).parent
    images_dir = out_dir / "images"
    ensure_dir(images_dir)

    report_path = out_dir / "diamond_analysis.md"

    df = sns.load_dataset("diamonds")

    # 리포트 파일을 UTF-8로 열어 한국어 제목과 설명을 기록합니다.
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("# 다이아몬드 EDA (seaborn diamonds 데이터셋)\n\n")

        # 1) 기초 기술통계: describe
        f.write("## 1. 기초 기술 통계 (기본 요약)\n\n")
        desc = df.describe(include='all')
        f.write(desc.to_markdown())
        f.write("\n\n")

        # 2) 결측치 및 고유값
        f.write("## 2. 결측치 및 고유값\n\n")
        missing = df.isnull().sum()
        uniques = df.nunique()
        f.write("### 결측치\n\n")
        f.write(missing.to_markdown())
        f.write("\n\n### 고유값 개수\n\n")
        f.write(uniques.to_markdown())
        f.write("\n\n")

        # 3) 왜도 / 첨도
        f.write("## 3. 왜도와 첨도\n\n")
        skew = df.skew(numeric_only=True)
        kurt = df.kurtosis(numeric_only=True)
        f.write("### 왜도 (Skewness)\n\n")
        f.write(skew.to_markdown())
        f.write("\n\n### 첨도 (Kurtosis)\n\n")
        f.write(kurt.to_markdown())
        f.write("\n\n")

        # 4) 상관관계
        f.write("## 4. 상관관계 (numeric)\n\n")
        corr = df.select_dtypes(include=[np.number]).corr()
        f.write(corr.to_markdown())
        f.write("\n\n")

        # 5) 그룹별 기술통계 (cut, color, clarity)
        f.write("## 5. 그룹별 기술 통계\n\n")
        grp_cut = df.groupby('cut')['price'].agg(['count','mean','median','std','min','max'])
        f.write("### 컷(cut)별 가격(price) 요약\n\n")
        f.write(grp_cut.to_markdown())
        f.write("\n\n")

        # =====================================================
        # 시각화 5개 이상 및 각 시각화 하단에 피봇/교차표 추가
        # =====================================================

        # A: 가격 분포 히스토그램
        f.write("## 시각화 1: 가격 분포 (히스토그램)\n\n")
        fig = plt.figure(figsize=(8,5))
        sns.histplot(df['price'], bins=50, kde=True)
        p1 = images_dir / "price_hist.png"
        save_fig(fig, p1)
        f.write(f"![]({p1.as_posix()})\n\n")
        # pivot: 가격 사분위수 요약
        price_q = df['price'].quantile([0,0.25,0.5,0.75,1.0]).to_frame(name='price')
        f.write(pivot_to_md(price_q, "가격 사분위수"))

        # B: Cut별 가격 박스플롯
        f.write("## 시각화 2: 컷(cut)별 가격 박스플롯\n\n")
        fig = plt.figure(figsize=(8,5))
        sns.boxplot(x='cut', y='price', data=df, order=['Fair','Good','Very Good','Premium','Ideal'])
        p2 = images_dir / "price_box_by_cut.png"
        save_fig(fig, p2)
        f.write(f"![]({p2.as_posix()})\n\n")
        # pivot: 컷별 가격 통계
        f.write(pivot_to_md(grp_cut, "컷별 가격 요약 (count, mean, median, std, min, max)"))

        # C: Carat vs Price 산점도 (색깔: clarity)
        f.write("## 시각화 3: 캐럿(carat) 대비 가격(price) 산점도 (클래리티 색상)\n\n")
        fig = plt.figure(figsize=(8,5))
        sns.scatterplot(x='carat', y='price', hue='clarity', data=df, alpha=0.6)
        p3 = images_dir / "carat_price_scatter.png"
        save_fig(fig, p3)
        f.write(f"![]({p3.as_posix()})\n\n")
        # pivot: 캐럿 구간(bin)별 가격 요약
        bins = [0,0.2,0.5,1,1.5,2,3,5]
        df['carat_bin'] = pd.cut(df['carat'], bins=bins)
        pivot_carat = df.pivot_table(index='carat_bin', values='price', aggfunc=['count','mean','median'])
        f.write(pivot_to_md(pivot_carat, "캐럿 구간별 가격 요약 (count, mean, median)"))

        # D: Color별 Price violin plot
        f.write("## 시각화 4: 색상(color)별 가격 바이올린 플롯\n\n")
        fig = plt.figure(figsize=(8,5))
        sns.violinplot(x='color', y='price', data=df, order=sorted(df['color'].unique()))
        p4 = images_dir / "price_violin_by_color.png"
        save_fig(fig, p4)
        f.write(f"![]({p4.as_posix()})\n\n")
        # pivot: 색상별 가격 통계
        pivot_color = df.groupby('color')['price'].agg(['count','mean','median','std'])
        f.write(pivot_to_md(pivot_color, "색상별 가격 요약 (count, mean, median, std)"))

        # E: 상관관계 히트맵 (numeric)
        f.write("## 시각화 5: 수치형 변수 상관관계 히트맵\n\n")
        fig = plt.figure(figsize=(7,6))
        sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', vmin=-1, vmax=1)
        p5 = images_dir / "correlation_heatmap.png"
        save_fig(fig, p5)
        f.write(f"![]({p5.as_posix()})\n\n")
        f.write(pivot_to_md(corr, "수치형 변수 상관관계 행렬"))

        # 추가 시각화 F: Cut vs Color 교차표 히트맵 (빈도)
        f.write("## 시각화 6: 컷(cut) vs 색상(color) 빈도 히트맵\n\n")
        ct = pd.crosstab(df['cut'], df['color'])
        fig = plt.figure(figsize=(8,4))
        sns.heatmap(ct, annot=True, fmt='d', cmap='YlGnBu')
        p6 = images_dir / "cut_color_crosstab.png"
        save_fig(fig, p6)
        f.write(f"![]({p6.as_posix()})\n\n")
        f.write(pivot_to_md(ct, "컷 vs 색상 교차표 (빈도)") )

        # 마무리: 상위/하위 샘플
        f.write("## 부록: 상위/하위 샘플\n\n")
        f.write("### 가격 상위 5개\n\n")
        f.write(df.nlargest(5, 'price').to_markdown(index=False))
        f.write("\n\n### 가격 하위 5개\n\n")
        f.write(df.nsmallest(5, 'price').to_markdown(index=False))
        f.write("\n\n")

    # 완료 메시지 (한국어)
    print("EDA 완료. 생성된 파일 목록:")
    print(f"- 리포트: {report_path}")
    for img in sorted(images_dir.iterdir()):
        print(f"- 이미지: {img}")


if __name__ == '__main__':
    main()
