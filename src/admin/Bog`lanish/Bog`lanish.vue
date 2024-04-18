<template>
    <div class="Boglanish">
        <SaidBar/>
        <div class="Boglanish-content">
            <div class="Boglanish-header">
                <div class="header-burger">
                    <button @click="burger"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
                    </button>
                </div>
                <div class="Boglanish-header__wrapper">
                    <h1>
                    Boglanish
                </h1>
                </div>
            </div>
            <div class="Boglanish-main">
                <div class="ustozlar-table">
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <h3>
                                        Ismi
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Telefon raqami
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Sozlama
                                    </h3>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>
                                        John doe
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        970206868
                                    </h3>
                                </td>
                                <td>
                                    <button class="delete">
                                        <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="Boglanish-footer">
                <div class="footer-wrapper">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                        </svg>
                    </button>
                    <div class="footer-content">
                        <span>
                           1
                        </span>
                        <span>
                            /
                        </span>
                        <span>
                            2
                        </span>
                    </div>
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </template>
    <script setup>
        import SaidBar from '@/components/SaidBar.vue';
        import { ref } from 'vue';
        import { useSidebarStore } from '@/stores/sidebar.js';
        const modal = ref(false)
        const oppenModal = () => (modal.value = !modal.value)
        const openChange = ref(false)
        const openModalChange = () => (openChange.value = !openChange.value)
    
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
        
    <style scoped>
        .Boglanish{
            display: flex;
            width: 100%;
            height: 100vh
        }
        .Boglanish-content{
            width: 100%;
        }
        .Boglanish-header{
            width: 100%;
            background-color: #624BFF;
            padding: 30px;
            padding-top: 0px;
           
        }
        .Boglanish-header__wrapper{
            display: flex;
            align-items: center;
            gap: 50px;
        }
        .Boglanish-header h1{
            color: white;
            font-size: 50px;
            font-weight: bold;
        }
        .Boglanish-header button{
            padding: 10px 10px;
            border: solid 1px white;
            border-radius: 20px;
            background-color: white;
            cursor: pointer;
            font-weight: bold;
        }
        .Boglanish-header button:hover{
            background-color: #624BFF;
            color: white;
        }
        .Boglanish-main{
            padding: 0 30px;
        }
        table,thead,tr {
            width: 100%;
        }
        table thead tr td {
            text-align: center;
            padding: 20px;
            padding-top: 0;
            padding-bottom: 0;
        } 
        table tbody td {
            text-align: center;
            padding-top: 20px;
        }  
        table tbody td img {
            overflow: hidden;
            object-fit: cover;
            object-position: center;
            width: 150px;
            height: 100px;
            border-radius: 10px;
            margin: 0 auto;
        }
        .delate {
            font-size: 30px;
            margin-right: 10px;
            cursor: pointer;
        }
        .edit {
            font-size: 30px;
            cursor: pointer;
        }
        .delate:hover {
            color: red;
        }
    
        .edit:hover {
            color: rgb(95, 95, 95);
        }
        .text{
            text-align: center;
            width: 500px;
        }
        .ustozlar-table {
            margin-top: 15px;
            padding: 20px;
            border-radius: 20px;
            box-shadow: 2px 2px 2px black;
            background-color: rgb(236, 236, 236)
        }
        table thead td h3{
            font-weight: bold;
            font-size: 20px;
        }
        table tbody td h3{
            font-weight: 500;
            font-size: 20px;
        }
        .Boglanish-footer{
            margin-top: 20px;
            width: 100%;
            padding: 30px;
            background-color: #624BFF;
        }
        .footer-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .Boglanish-footer button{
            padding: 5px 10px;
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 1px solid white;
            border-radius: 10px;
            background-color: white;
        }
        .Boglanish-footer span {
            color: white;
            font-size: 16px;
        }
        .Boglanish-footer button:hover {
            background-color: transparent;
            color: white;
        }
        .create-modal-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.527);
        display: none;
    }
    
    .create-modal {
        padding: 50px;
        width: 50%;
        background-color: white;
        position: absolute;
        top: 10%;
        left: 28%;
        border-radius: 30px;
        z-index: 10;
        /* margin-left: 400px; */
    
    }
    
    #openModal {
        display: block;
    }
    
    #openChange {
        display: block;
    }
    
    .modal-change {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.692);
        display: none;
    }
    
    .change-modal {
        padding: 50px;
        width: 50%;
        background-color: white;
        position: absolute;
        top: 10%;
        left: 28%;
        border-radius: 30px;
        z-index: 10;
    }
    
    .create-modal-header,
    .change-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px
    }
    
    .create-modal-header h1,
    .change-header h1 {
        color: #212B36;
        font-weight: bold;
        font-size: 30px;
    }
    
    .create-modal-header button,
    .change-header button {
        background-color: #624BFF;
        color: white;
        padding: 10px 15px;
        border: 1px solid #624BFF;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center
    }
    
    .create-modal-header button:hover {
        background-color: transparent;
        color: #624BFF
    }
    .create-modal-main h3{
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    .change-modal h3{
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    
    .change-header button:hover {
        background-color: transparent;
        color: #624BFF
    }
    
    .form-grid label input {
        width: 100%;
        padding: 10px 10px;
        font-size: 15px;
        border: 1px solid rgb(48, 48, 48);
        border-radius:10px ;
    }
    
    .form-grid {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-bottom: 50px;
    }
    
    .inp-number {
        width: 100%;
        padding: 10px 10px;
        font-size: 15px;
    }
    
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
    
    .form-grid label {
        width: 100%
    }
    
    .modal-foto {
        width: 100%;
    }
    
    .file-input-container {
        width: 100%;
    }
    
    .submitBtn {
        padding: 10px 15px;
        border: 1px solid #624BFF;
        background-color: #624BFF;
        color: white;
        cursor: pointer;
        border-radius: 10px
    }
    
    .submitBtn:hover {
        background-color: transparent;
        color: #624BFF
    }
    
    .modal-footer {
        display: flex;
        align-items: center;
        justify-content: end;
    }
    
    .modal-footer {
        position: relative;
    }
    
    .file-input-container {
        position: relative;
        overflow: hidden;
        display: inline-block;
        padding: 10px;
        border: 1px solid #624BFF;
        border-radius: 5px;
        background-color: #624BFF;
        cursor: pointer;
        color: white;
        width: 300px;
    }
    
    .file-input-container input[type=file] {
        cursor: pointer;
        position: absolute;
        font-size: 100px;
        opacity: 0;
        right: 0;
        top: 0;
        cursor: pointer;
    }
    
    .file-input-container span {
        display: block;
        text-align: center;
        cursor: pointer;
        font-size: 20px;
    }
    
    .file-input-container:hover {
        background-color: transparent;
        color: #624BFF;
    }
    
    .teacher-info {
        resize: none;
        overflow: hidden;
        width: 100%;
        height: 100px;
        padding: 10px;
        border: 1px solid rgb(48, 48, 48);
    }
    
    .role input {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    
    .role {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .necessary {
        margin-bottom: 15px;
    }
    .header-burger button{
        background-color: transparent;
        border: none;
    }
    .header-burger button svg{
        color: #FFFF;
        font-size: 30px;
    }
    .header-burger{
        display: none;
    }
    @media(max-width:1000px) {
        .Boglanish {
            margin-left: 0;
        }
    
        .form-grid {
            flex-direction: column;
            gap: 30px;
        }
    }
    
    @media(max-width:1200px) {
        .ustozlar-table {
            overflow: auto;
            overflow-x: scroll;
            width: 100%;
        }
    
        .ustozlar-table table {
            width: 900px;
            overflow: auto;
            overflow-x: scroll;
            /* display: none; */
        }
    }
    
    @media(max-width:600px) {
        .create-modal {
            width: 80%;
            left: 10%;
        }
    }
    
    @media(max-width:400px) {
        .create-modal {
            padding: 20px;
        }
    }
    
    @media(max-width:600px) {
        .change-modal {
            width: 80%;
            left: 10%;
        }
    }
    
    @media(max-width:400px) {
        .change-modal {
            padding: 20px;
        }
    }
    @media(max-width:1500px){
        .header-burger{
            display: block;
        }
    }
    @media(max-width:470px){
        .Boglanish-header__wrapper{
            flex-direction: column;
            gap: 10px;
        }
    }
    @media(max-width:700px){
    .Boglanish-main{
        padding:0;
    }
}
    </style>