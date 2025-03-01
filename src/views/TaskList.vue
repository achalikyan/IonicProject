<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>TaskList</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class = "animated-bg"></div>

      <div class="task-header">
  <h2>Febrero 2023</h2>
  <div class="calendar">
    <div class="day"><span>Lun</span><strong>5</strong></div>
    <div class="day"><span>Mar</span><strong>6</strong></div>
    <div class="day"><span>Mie</span><strong>7</strong></div>
    <div class="day"><span>Jue</span><strong>8</strong></div>
    <div class="day"><span>Vie</span><strong>9</strong></div>
    <div class="day"><span>Sab</span><strong>10</strong></div>
    <div class="day"><span>Dom</span><strong>11</strong></div>
  </div>
  <p class="tasks-info">Te quedan <span class="highlight">3</span> tareas</p>
</div>



<div class="scroll-container">
  <div class="grid-container">
    <div class="square" v-for="n in 10" :key="n">
      <h3 class="title">Figma</h3>
      <p class="description">
        Diseñar en figma el prototipo de aplicación para gestionar horarios y tareas.
      </p>
      <p class="entrega">Entrega:</p>
      <div class="days">
        
      </div>
      <div class="bottom-info">
        <span class="hour">10:00 AM</span>
        <span class="date">22/02/2024</span>
      </div>
    </div>
  </div>
</div>



      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>  
  
  <style scoped>




.scroll-container {
  height: 400px;
  overflow-y: auto;
  border: 2px solid #ccc;
  padding: 10px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 10px;
  width: max-content;
  margin: auto;
}

.square {
  width: 160px;
  height: 150px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 0px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-size: 1rem;
  font-weight: bold;
  color: #3a5900;
  
  margin-bottom: -10px;
}

.description {
  font-size: 0.8rem;
  color: #333;
  margin-bottom: -8px;
}

.entrega {
  font-size: 0.9rem;
  font-weight: bold;
}

.days {
  display: flex;
  gap: 4px;
  font-size: 0.8rem;
  color: gray;
  margin-bottom: -20px;
}

.highlight {
  color: black;
  font-weight: bold;
}

.bottom-info {
  display: flex;
  gap: 17px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #3a5900;
}






.task-header {
  background: #fdfde1;
  border-radius: 20px;
  padding-bottom: -100px;
  padding-top: 10px;
  text-align: center;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -10px;
}

.task-header h2 {
  font-family: "Staatliches-Regular", serif;
  color: #3a5900;
  font-size: 1.8rem;
  margin-bottom: 6px;
  font-weight: bold;
}

.calendar {
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 50px;
}

.day {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #3a5900;
  border-radius: 10px;
  padding: 5px;
  width: 40px;
  height: 50px;
  font-family: "Staatliches-Regular", serif;
}

.day span {
  font-size: 0.8rem;
  color: #3a5900;
}

.day strong {
  font-size: 1.3rem;
  color: #3a5900;
}

.tasks-info {
  font-family: "Staatliches-Regular", serif;
  color: #3a5900;
  font-size: 1.2rem;
  margin-top: 10px;
}

.highlight {
  color: #ff5454;
  font-weight: bold;
}
.animated-bg::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      
      background: #FFFDE7;
      clip-path: polygon(51% 100%, 52% 97%, 55% 91%, 56% 85%, 58% 78%, 62% 71%, 68% 64%, 
                         73% 57%, 77% 50%, 79% 43%, 78% 38%, 74% 30%, 70% 24%, 66% 19%, 
                         63% 14%, 64% 9%, 67% 4%, 69% 0%, 100% 0%, 100% 4%, 100% 9%, 
                         100% 14%, 100% 19%, 100% 24%, 100% 30%, 100% 38%, 100% 43%, 
                         100% 50%, 100% 57%, 100% 64%, 100% 71%, 100% 78%, 100% 85%, 
                         100% 91%, 100% 97%, 100% 100%);
      z-index: -1; 
      transform: scaleX(-1);
    }
  @font-face {
    font-family: "Staatliches-Regular";
    src: url("@/assets/fonts/Staatliches-Regular.woff") format("woff");
    font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  h1 {
    font-family: "Staatliches-Regular", serif;
    color: #525252;
    font-size: 3.65rem;
    font-weight: bold;
    text-align: center;
    margin-top: 16px;
  }
  .highlight {
    color: #FF5454;
  }
  
  ion-button {
    font-family: "Staatliches-Regular", serif;
    font-size: 1.8rem;
    color: #282828;
    text-shadow: 0px 1.3px 2px rgba(0, 0, 0, 0.5);
    --background: linear-gradient(to bottom, #81F24C 26%, #8EEABE 100%);
  }
  .button-list {
    row-gap: 100px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: 78%;
    max-width: 280px;
    width: 100%;
  }
    ion-content {
    --background: #EEFFEA; /* Color de fondo personalizado */
  }
</style>