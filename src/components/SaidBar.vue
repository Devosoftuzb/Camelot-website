<template>
    <div :class="sidebar.sidebar ? 'Saidbar' : 'Saidbar-of'" class="saidbar">
        <div class="saidbar-header">
            <div class="saidbar-header-X">
                <button  @click="burger">
                    <svg class="brclose" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clip-rule="evenodd"/></svg>
                </button>
            </div>
            <div class="saidbar-header__logo">
                <img src="../../public/images/logo.png" alt="">
            </div>
        </div>
        <div class="saidbar-menu">
            <ul>
                <li>
                    <router-link to="/admin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"/></svg>
                      Posh panel
                    </router-link>
                </li>
                <li>
                    <router-link to="/Ustozlar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120"/></svg>
                      Ustozlar
                    </router-link>
                </li>
                <li>
                    <router-link to="/Kurslar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M12.402 8.976H7.259a2.278 2.278 0 0 0-.193-4.547h-1.68A3.095 3.095 0 0 0 4.609 0h7.793a1.35 1.35 0 0 1 1.348 1.35v6.279c0 .744-.604 1.348-1.348 1.348ZM2.898 4.431a1.848 1.848 0 1 0 0-3.695a1.848 1.848 0 0 0 0 3.695m5.195 2.276c0-.568-.46-1.028-1.027-1.028H2.899a2.649 2.649 0 0 0-2.65 2.65v1.205c0 .532.432.963.964.963h.172l.282 2.61A1 1 0 0 0 2.66 14h.502a1 1 0 0 0 .99-.862l.753-5.404h2.16c.567 0 1.027-.46 1.027-1.027Z" clip-rule="evenodd"/></svg>
                        Kurslar
                    </router-link>
                </li>
                <li>
                    <router-link to="/Rasmlar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-4c0-2.84 0-4.61-.5-5.811V17a3.62 3.62 0 0 1-2.56-1.06l-.752-.752c-.722-.722-1.082-1.082-1.491-1.234a2 2 0 0 0-1.394 0c-.409.152-.77.512-1.49 1.234l-.114.113c-.585.585-.878.878-1.189.932a1 1 0 0 1-.699-.134c-.268-.166-.431-.547-.758-1.308L11 14.667c-.75-1.75-1.124-2.624-1.778-2.952a2 2 0 0 0-1.065-.205c-.729.062-1.401.735-2.747 2.08L3.5 15.5V2.887a2.85 2.85 0 0 0-.328.285" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="2" d="M3 10c0-1.914.002-3.249.138-4.256c.131-.978.372-1.496.74-1.865c.37-.37.888-.61 1.866-.741C6.751 3.002 8.086 3 10 3h4c1.914 0 3.249.002 4.256.138c.978.131 1.496.372 1.865.74c.37.37.61.888.742 1.866C20.998 6.751 21 8.086 21 10v4c0 1.914-.002 3.249-.137 4.256c-.132.978-.373 1.496-.742 1.865c-.369.37-.887.61-1.865.742c-1.007.135-2.342.137-4.256.137h-4c-1.914 0-3.249-.002-4.256-.137c-.978-.132-1.496-.373-1.865-.742c-.37-.369-.61-.887-.741-1.865C3.002 17.249 3 15.914 3 14z"/><circle cx="15" cy="9" r="2" fill="currentColor"/></g></svg>
                      Rasmlar
                    </router-link>
                </li>
                <li>
                    <router-link to="/Afzaliklar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m48.19 121.42l24.1 21.06l-73.61 84.1l-24.1-23.06ZM191.93 342.63L121.37 272L144 249.37L214.57 320Zm65 .79L185.55 272l22.64-22.62l47.16 47.21l111.13-127.17l24.1 21.06Z"/></svg>
                     Afzaliklar
                    </router-link>
                </li>
                <li>
                    <router-link to="/Habarlar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m12.942 14.413l-2.56-2.66L5.45 14.48l5.406-5.736l2.56 2.66l4.93-2.727zM11.899 2C6.432 2 2 6.144 2 11.257c0 2.908 1.434 5.503 3.678 7.2V22l3.378-1.874c.9.252 1.855.388 2.843.388c5.468 0 9.9-4.145 9.9-9.257c0-5.113-4.432-9.257-9.9-9.257"/></svg>
                        Bog`lanish
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
    import { useSidebarStore } from "../stores/sidebar.js";
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
</script>
    
<style>
    .saidbar{
        width: 350px;
        height: 100vh;
        background-color: #212B36;
    }
    .saidbar-header__logo{
        padding: 10px;
        background-color: white;
        border-radius: 30px;
        cursor: pointer;
    }
    .saidbar-header{
        padding: 10px;
        padding-top: 5px;
    }
    .saidbar-menu{
        padding:20px;
    }
    .saidbar-menu ul li a{
        display: block;
        margin-bottom: 10px;
        color: white;
        font-size: 25px;
        font-weight: bold;
        padding: 10px 25px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    ul a svg{
    font-size: 35px;
}
    .saidbar-menu ul li:hover{
        background-color: #624BFF;
        border-radius: 30px;
    }
    .router-link-exact-active {
    background-color: #624BFF;
    border-radius: 30px;
}
.saidbar-header-X{
    color: white;
    font-size: 25px;
    padding: 8px;
}
.db{
    display: block;
}
.dn{
    display: none;
}
.Saidbar-of{
    display: none;   
}
.saidbar-header-X{
    display: none;
}
@media(max-width:1500px){
    .saidbar{
        position: fixed;
    }
    .saidbar-header-X{
        display: block;
    }
}   
@media(max-width:375px){
    .saidbar-header__logo img{
        width: 100%;
    }
    
}
</style>