<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Eula</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div class="animated-bg"></div>
      <h1>TERMINOS Y CONDICIONES</h1>
      <div class="rounded-triangle"></div>
      <h2></h2>
      <div class="scrollable-text">
        <p>
          Bienvenido a NextCalendar, el lugar donde las fechas toman vida y los eventos encuentran su destino. Antes de sumergirte en el maravilloso mundo de la organización temporal, te pedimos que leas y aceptes nuestros términos y condiciones, ¡donde la eficiencia se encuentra con la fineza legal!
        </p>
        <p>
          1. Entrada al Reino de las Fechas: Al hacer clic en "Aceptar", reconoces que estás listo para adentrarte en el universo de NextCalendar. Prepárate para una experiencia organizativa única y emocionante.
        </p>
        <p>
          2. Eventos en Tránsito: Todos los eventos que ingresan son propiedad de NextCalendar. Las disputas sobre la programación se resolverán en nuestro tribunal virtual. ¡Prepárate para la eficiencia judicial!
        </p>
        <p>
          3. Condiciones de Productividad: Ten en cuenta que las tareas pendientes y los recordatorios pueden ser abundantes. Lluvias de notificaciones, tormentas de productividad y neblina de eficiencia son eventos regulares. Se recomienda estar preparado.
        </p>
        <p>
          4. Responsabilidad por Desorganización: NextCalendar no se hace responsable de la pérdida o daño de eventos, ya que la organización como la conoces tiene poco valor aquí. Tu antiguo sistema de recordatorios ya no es relevante.
        </p>
        <p>
          5. Convivencia con Funciones Sobresalientes: Podrías encontrarte con características innovadoras, widgets emocionantes y antiguas funciones olvidadas. La interacción con estas funciones es bajo tu propio riesgo. Las actualizaciones también necesitan su espacio personal.
        </p>
        <p>
          6. Prohibido el Regreso a Métodos Antiguos: Una vez que pruebes NextCalendar, regresar a métodos de organización obsoletos no es tan sencillo. La eficiencia está sujeta a la aprobación de tu nueva vida organizativa. Intentar volver a métodos antiguos puede resultar en una falta de sincronización.
        </p>
        <p>
          de Usuario Eficiente: Aceptas que tu tiempo estará sujeto a nuestras políticas por toda tu vida organizativa. Las actualizaciones de términos se notificarán de manera eficiente en tu bandeja de entrada.
        </p>
        <p>
          Al aceptar estos términos y condiciones, te sumerges voluntariamente en el eficiente mundo de NextCalendar. ¡Que tus días estén llenos de eventos bien planificados!
        </p>

      </div>
      <h2></h2>

      <div class="rounded-triangle2"></div>

     
      <router-link to="/register">
        <img src="@/assets/images/Back button.png" alt="Desc" 
             style="width: 75%; max-width: 60px; margin-top: 2px; display: block; margin-left: auto; margin-right: auto;">
      </router-link>


    </ion-content>
  </ion-page>
</template>
  
  
  <script setup lang="ts">
  import { IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

  
  </script>
  
  
<style scoped>
.imagen {
  position: relative;
  margin: 0 auto;
}

h1 {
  font-family: "Staatliches-Regular", serif;
  color: #000000;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

.custom-scroll {
  --overflow: auto;
}

.scrollable-text {
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
  max-height: 460px; /* Limita la altura de la caja para que el contenido se desplace */
  overflow-y: auto;  /* Activa el desplazamiento vertical */
}

.rounded-triangle {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 28px solid #868686;
  display: block; /* Asegura que el auto margin funcione */
  position: relative;
  margin: 0 auto;
}

.rounded-triangle2 {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 28px solid #868686; /* Ahora apuntará hacia abajo */
  display: block;
  position: relative;
  margin: 0 auto;
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
</style>