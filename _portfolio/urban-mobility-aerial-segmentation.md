---
title: "Urban Mobility Forecasting & Aerial Image Segmentation"
collection: portfolio
---

<i class="fa fa-fw fa-calendar" aria-hidden="true"></i> **Published:** September 05, 2026  
**Tools:** PyTorch, U-Net, ResNet-34

---

### Overview
A study combining leakage-safe bike-share demand forecasting with cross-city building-footprint segmentation using Poisson gradient boosting and a pretrained U-Net.

---

### Key Contributions
- Built a leakage-safe recursive forecasting pipeline with monthly forecast origins and Poisson gradient boosting, reducing
MAE from 55.84 to 54.34.
- Developed an aerial building-footprint segmentation model using a U-Net with an ImageNet-pretrained ResNet-34
encoder and boundary-aware loss.
- Evaluated cross-city generalization with Vienna held out, achieving 0.7724 Dice/F1 and 0.6292 IoU across 14,400 patches.
- <a href="https://github.com/SalmanSamiKhan/urban-mobility-forecasting-and-aerial-image-segmentation" target="_blank" rel="noopener noreferrer">GitHub</a>