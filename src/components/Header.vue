<template>
    <header>
        <div class="container mx-auto px-5 pb-5 border-b">
            <div class="header__wrapper">
                <div class="header__grid">
                    <div class="header__logo">
                        <img class="header-logo" src="/images/logo.png" alt="">
                    </div>
                    <div class="header__select">
                        <select class="border p-3 rounded-lg outline-blue-500 cursor-pointer" name="" id="">
                            <option value="" disabled selected>Fanlar</option>                        
                            <option value="">Ingiliz tili</option>
                            <option value="">Russ tili</option>
                            <option value="">Turk tili</option>
                        </select>
                    </div>
                </div>
                <div class="header__grid" >
                    <a >
                        Online Talim 
                    </a>
                    <button class="header__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
                        <span>
                            +998975556677
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style>
header{
    padding-top: 30px;
}

    .header__logo h1 {
        font-size: 50px;
    }
    .header__wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header__grid{
        display: flex;
        align-items: center;
        gap: 50px;
    }
    .header__btn{
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: #3B82F6;
        color: white;
        border: 2px solid #292583;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
    .header__btn:hover{
        background-color: white;
        color: #292583;
    }
    .header-logo{
        width: 200px;
        cursor: pointer;
    }
    button{
        transition: 0.4s;
    }
    button{
  background: linear-gradient(
    to left,
    #0866FF -100%,
    #292583
   
  );

  
}

button:hover{
  background: white;
}
    @media(max-width:600px){
        .header__grid{
            gap: 10px;
        }
    }
    @media(max-width:500px){
        .header__logo h1{
            font-size: 30px;
        }
    }
    @media(max-width:460px){
        .header__btn{
            padding: 5px;
        }
        .header__btn span{
            display: none;
        }
    }
</style>