<script setup lang="ts">

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import {type Ref, ref} from "vue";

const blague:Ref<{id: number, devinette: string, reponse: string, createdAt: string, updatedAt: string}>|Ref<{devinette:string, reponse:string}> = ref({devinette: "", reponse: ""});

const randomBlague = async () => {
  let blagueChanged:boolean = false;
  while(!blagueChanged) {
    await fetch("https://carambar-api-r8yt.onrender.com/blagues/random")
        .then(res => res.json()).then(resBlague => {
          if (!blague.value || blague.value.devinette !== resBlague.devinette) {
            blague.value = resBlague
            blagueChanged = true;
          } else {
            alert("L'API ne répond pas, veuillez réessayer plus tard");
            blagueChanged = true;
          }
        });
  }
}

randomBlague();

</script>

<template>
  <TheHeader />
  <main>
    <div class="backgroundImage">
      <div class="blague">
        <div class="blague__container">
          <img class="image" src="./assets/blague.png" alt="Carambar tenant un papier avec la blague écrite dessus">
          <div class="text">
            <p class="text__devinette">{{ blague.devinette }}</p>
            <p class="text__reponse">{{ blague.reponse ? "Réponse : " + blague.reponse : "" }}</p>
          </div>
        </div>
        <div class="blague__dialog">
          <p>Hilarante celle-ci, tu veux <span class="text-bold">une autre blague</span> ?</p>
          <button @click="randomBlague">Clique Ici</button>
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped>
main {
  width: 100dvw;
  height: 70dvh;
  background-color: #E23A4A;

  .backgroundImage {
    width: 100%;
    height: 100%;
    background: url("assets/main-bg-image.png") repeat;
  }

  .blague {
    display: flex;
    justify-content: center;
    position: relative;
    top: 120px;

    &__container {
      position: relative;

      .image {
        transform: scaleX(-1);
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 75px;
        width: 250px;
        position: absolute;
        top: 180px;
        left: 20px;
        transform: rotateZ(15deg);
        color: #a12b36;

        &__devinette {
          width: 150px;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
          text-shadow: 0 0 1px #FFEE04;
        }

        &__reponse {
          font-size: 0.8rem;
          text-align: center;
        }
      }

    }

    &__dialog {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 300px;
      height: fit-content;
      background: #F8F8F8;
      border-radius: 30px 30px 30px 0;
      border: #FFEE04 4px solid;
      padding: 15px;
      position: relative;
      top: 15px;

      button {
        background-color: #FFEE04;
        color: #E23A4A;
        border: rgba(226, 58, 74, 0.33) 2px solid;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;

        &:hover {
          background-color: #E23A4A;
          color: #FFEE04;
          border-color: rgba(255, 238, 4, 0.33);
        }

        &:active {
          background-color: #a12b36;
        }
      }

      p {
        text-align: center;
        color: #E23A4A;

        .text-bold {
          font-weight: 700;
        }
      }
    }
  }
}

@media screen and (max-width: 610px) {
  main {
    .blague {
      flex-direction: column-reverse;
      align-items: center;
      top: 20px;

      &__dialog {
        border-radius: 30px;
      }
    }
  }
}
</style>