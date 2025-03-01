<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>


    <ion-content :fullscreen="true">

      

      <div style="text-align: center;"  class="animated-bg">
        <h1>
          INICIAR SESION
        </h1>

        <div class="list">
          <ion-item class="custom-input">
            <ion-input placeholder="Mail/Numero"></ion-input>
          </ion-item>
          <ion-item class="custom-input">
            <ion-input type="password" placeholder="Contraseña"></ion-input>
          </ion-item>
        </div>

        
        <h1></h1>
                
        <div class="button-list">
        <ion-button expand="block" class="font" router-link="/register">NO TENGO CUENTA</ion-button>
        <ion-button expand="block" class="font" router-link="/tabs/home">INICIAR SESIÓN</ion-button>
      </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>


<style scoped>

.custom-input {
  --border-color: #707070; /* Color del borde */
  --border-width: 1px;
  --border-radius: 10px; /* Bordes redondeados */
  --background: transparent; /* Fondo transparente */
  --inner-border-width: 0px; /* Elimina la línea inferior */
  --highlight-color: transparent; /* Evita efectos de resaltado */
  --ion-item-border-color: transparent; /* Otra opción para eliminar la línea */

  padding: 5px 10px; /* Reduce el espacio interno */
  min-height: 20px; /* Ajusta la altura del rectángulo */
}

ion-input {
  --padding-start: 5px; /* Reduce el espacio interno del input */
  font-size: 1.2rem;
}

.animated-bg::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #e4e4e4;
  clip-path: polygon(51% 100%, 52% 97%, 55% 91%, 56% 85%, 58% 78%, 62% 71%, 68% 64%, 
                     73% 57%, 77% 50%, 79% 43%, 78% 38%, 74% 30%, 70% 24%, 66% 19%, 
                     63% 14%, 64% 9%, 67% 4%, 69% 0%, 100% 0%, 100% 4%, 100% 9%, 
                     100% 14%, 100% 19%, 100% 24%, 100% 30%, 100% 38%, 100% 43%, 
                     100% 50%, 100% 57%, 100% 64%, 100% 71%, 100% 78%, 100% 85%, 
                     100% 91%, 100% 97%, 100% 100%);
  z-index: -1; 
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
  color: #000000;
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
  margin-top: 108%;
  max-width: 280px;
  width: 100%;
}
.list {
  row-gap: 20px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  max-width: 280px;
  width: 100%;
}</style>