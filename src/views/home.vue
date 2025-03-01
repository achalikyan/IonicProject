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
      <div class="animated-bg"></div>

      <p1 class="time">
        6 : 15
      </p1>

      <img src="@\assets\images\nube.png" alt="Desc">
      <p2>Lunes, 5 Feb</p2>

      <p class="pending-tasks">
        Tienes <span class="highlight">3</span> tareas pendientes
      </p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<style scoped>
ion-content {
  --background: #EEFFEA; /* Color de fondo personalizado */
}

img {
  width: 30%;
  max-width: 300px;
  margin-top: 140px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.time {
  font-family: "Staatliches-Regular", serif;
  color: #ffffff;
  font-size: 6.5rem;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Borde mejorado */
  -webkit-text-stroke: 1.5px black; /* Contorno negro más definido */
  text-shadow:
    1px 1px 0px black,
    -1px 1px 0px black,
    1px -1px 0px black,
    -1px -1px 0px black; /* Sombra para reforzar el contorno */
}

p2 {
  font-family: "Staatliches-Regular", serif;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Borde mejorado */
  -webkit-text-stroke: 0.1px black; /* Contorno negro más definido */
  text-shadow:
    1px 1px 0px black,
    -1px 1px 0px black,
    1px -1px 0px black,
    -1px -1px 0px black; /* Sombra para reforzar el contorno */
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
  -webkit-text-stroke: 1px black; /* Borde negro */
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

.pending-tasks {
  font-family: "Staatliches-Regular", serif;
  color: #525252;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 340px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Pequeña sombra */
}
</style>
