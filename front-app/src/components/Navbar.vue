<template>
    <div class="header">
        <nav class="nav">
            <h4 class="nav__link">
                <router-link to="/home"><img src="../assets/icofont/home.svg" alt=""></router-link>
            </h4>
            <h4 class="nav__link">
                <router-link to="/invoices"><img src="../assets/icofont/plus-circle.svg" alt=""></router-link>
            </h4>
            <!-- <h4 class="nav__link">
                <router-link to="/debit"><img src="../assets/icofont/minus-circle.svg" alt=""></router-link>
            </h4> -->
            <h4 class="nav__link">
                <router-link to="/chart"><img src="../assets/icofont/chart-line-alt.svg" alt=""></router-link>
            </h4>
            <h4 class="nav__link">
                <router-link to="/options"><img src="../assets/icofont/options.svg" alt=""></router-link>
            </h4>
        </nav>
    </div>
</template>
<script>
    export default {
        name: "app-header",
    };
</script>
<style>
    .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .nav {
        display: flex;
        flex-direction: column;
        max-height: 80vh;
        width: 20vw;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        left: 0;
    }
    .nav__link{
        background: #FFE9F7;
        border: #fff 1px solid;
        border-radius: 50% ;
        cursor: pointer;
    }

    img{
        width: 32px;
        height: 32px;
        color: #646464;
    }
</style>