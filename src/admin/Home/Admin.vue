<template>
<div class="Admin">
    <SaidBar/>
    <div class="admin-content">
        <div class="admin-header">
            <div class="header-burger">
                <button @click="burger"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
                </button>
            </div>
            <h1>
                Bosh panel
            </h1>
        </div>
        <div class="admin-main">
            <div class="admin-main__wrapper">
                <div class="admin-main__wrapper__card">
                    <div class="admin__card__grid">
                        <h2>
                            Ustozlar
                        </h2>
                        <span>
                            {{lengthAll.teacher}}
                        </span>
                    </div>
                    <router-link to="/Ustozlar">
                    O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </router-link>
                </div>
                <div class="admin-main__wrapper__card">
                    <div class="admin__card__grid">
                        <h2>
                            Kurslar
                        </h2>
                        <span>
                            {{lengthAll.lesson}}
                        </span>
                    </div>
                    <router-link to="/Kurslar">
                    O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </router-link>
                </div>
                <div class="admin-main__wrapper__card">
                    <div class="admin__card__grid">
                        <h2>
                            Rasmlar
                        </h2>
                        <span>
                            {{lengthAll.slaydImg}}
                        </span>
                    </div>
                    <router-link to="/Rasmlar">
                    O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </router-link>
                </div>
                <div class="admin-main__wrapper__card">
                    <div class="admin__card__grid">
                        <h2>
                            Afzaliklar
                        </h2>
                        <span>
                            {{lengthAll.advantages}}
                        </span>
                    </div>
                    <router-link to="/Afzaliklar">
                    O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </router-link>
                </div>
                <div class="admin-main__wrapper__card">
                    <div class="admin__card__grid">
                        <h2>
                            Bog`lanish
                        </h2>
                        <span>
                            {{lengthAll.contact}}
                        </span>
                    </div>
                    <router-link to="/Bog`lanish">
                    O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import SaidBar from '@/components/SaidBar.vue';
import { useSidebarStore } from '@/stores/sidebar.js';
import { reactive, onMounted } from 'vue'
import axios from '@/services/axios'
const sidebar = useSidebarStore();
    function burger() {
        sidebar.sidebar = !sidebar.sidebar
        const burger = document.querySelector('.bropen');
        const burgercl = document.querySelector('.brclose');
        const modal = document.querySelector('.header-modal-mobile')
        burgercl.classList.toggle('dn');
        burger.classList.toggle('db');
        // burgercl.classList.remove('db');
        modal.classList.toggle('db');
        
    }

    const lengthAll = reactive({
    teacher: 0,
    news: 0,
    advantages: 0,
    lesson: 0,
    contact: 0,
    slaydImg:0,
})

const getAll = () => {
    axios
        .get("/teachers/find-all", {

        })
        .then((res) => {
            lengthAll.teacher = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .get("/advatages/find-all", {
        })
        .then((res) => {
            lengthAll.advantages = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });
    axios
        .get("/slayd-imges/find-all", {
        })
        .then((res) => {
            lengthAll.slaydImg = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .get("/lessons/find-all", {
        })
        .then((res) => {
            lengthAll.lesson = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .get("/contact/find-all", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then((res) => {
            lengthAll.contact = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    getAll();
});
</script>
    
<style scoped>
    .Admin{
        display: flex;
    }
    .admin-content{
        width: 100%;

    }
    .admin-header{
        width: 100%;
        background-color: #624BFF;
        padding: 30px;
    }
    .admin-header h1{
        color: white;
        font-size: 50px;
        font-weight: bold;
    }
    .admin-main{
        padding-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .admin-main__wrapper__card{
        background-color: #00000070;
        padding: 20px;
        border-radius: 20px;
    }
    .admin-main__wrapper__card h2{
        color: white;
        font-size: 30px;
    }
    .admin__card__grid{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .admin-main__wrapper__card span{
        font-size: 30px;
        color: white;
    }
    .admin-main__wrapper__card a{
        padding: 5px 20px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        margin-top: 20px;
        color: white;
    }
    .admin-main__wrapper__card a svg{
        font-size: 25px;
    }
    .admin-main__wrapper{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        gap: 30px;
    }
    .header-burger button{
        color: white;
        font-size: 30px;
        display: none;
    }
    @media(max-width:1090px){
        .admin-main__wrapper{
        grid-template-columns: repeat(3,1fr);
    }
        .header-burger button{
            display: block;
        }
}
    @media(max-width:730px){
        .admin-main__wrapper{
        grid-template-columns: repeat(2,1fr);
    }
    }
    @media(max-width:500px){
        .admin-main__wrapper{
        grid-template-columns: repeat(1,1fr);
    }
    }
</style>