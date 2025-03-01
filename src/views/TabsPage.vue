<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="custom-tab-bar">

        <ion-tab-button tab="tab2" href="/tabs/home" class="small-tab">
          <img src="@/assets/images/casa.png" alt="Home">
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/chat" class="small-tab">
          <img src="@/assets/images/chat.png" alt="Chat">
        </ion-tab-button>

          <ion-tab-button tab="tab5" href="/tabs/create" class="center-tab">
            <img src="@/assets/images/add.png" alt="Create">
          </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tabs/task_list" class="small-tab">
          <img src="@/assets/images/list.png" alt="Tasks">
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/configuration" class="small-tab">
          <img src="@/assets/images/options.png" alt="Config">
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { addCircle, atCircle, chatbubble, ellipse, hammer, home, list, settings, square, star, starHalf, triangle } from 'ionicons/icons';
</script>
  <style scoped>
  .custom-tab-bar {
    background: #fdf8e6; /* Color de fondo similar al de la imagen */
    border-top-left-radius: 26px;
    border-top-right-radius: 20px;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  
  .small-tab, .center-tab {
    flex: none !important;
    border-radius: 50% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
  }
  
  .small-tab {
    background: #fcf8e6;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items:center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .small-tab img {
    width: 24px;
    height: 24px;
  }
  
  .center-button-container {
    position: absolute;
    top: -20px; 
    left: 50%;
    transform: translateX(-50%);
  }
  
  .center-tab {
    background: linear-gradient(135deg, #a1f44d, #4ded87); /* Degradado verde */
    border-radius: 50%;
  
    width: 70px;
    height: 70px;
    flex-shrink: 0;
  
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .center-tab img {
    width: 32px;
    height: 32px;
  }
  </style>