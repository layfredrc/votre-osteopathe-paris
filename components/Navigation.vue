<template>
   <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><nuxt-link to="/" class="navigation__link"><span>01</span>Accueil</nuxt-link></li>
                    <li class="navigation__item"><nuxt-link to="/services" class="navigation__link"><span>02</span>Services</nuxt-link></li>
                    <li class="navigation__item"><nuxt-link to="/patriciaChung" class="navigation__link"><span>03</span>Votre Ostéopathe</nuxt-link></li>
                    <li class="navigation__item"><a href="https://www.doctolib.fr/osteopathe/paris/patricia-chung" target="_blank" class="navigation__link"><span>04</span>Prendre RDV</a></li>
                    <li class="navigation__item"><nuxt-link to="/#accessibility"  class="navigation__link"><span>05</span>Accessibilité</nuxt-link></li>
                 </ul>
            </nav>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@mixin respond($breakpoint) {
    @if $breakpoint == phone {
        @media only screen and (max-width: 37.5em) { @content };    //600px
    }
    @if $breakpoint == tab-port {
        @media only screen and (max-width: 56.25em) { @content };     //900px
    }
    @if $breakpoint == tab-land {
        @media only screen and (max-width: 75em) { @content };    //1200px
    }
    @if $breakpoint == big-desktop {
        @media only screen and (min-width: 112.5em) { @content };    //1800
    }
}

$color-primary: #55c57a;
$color-primary-light: #7ed56f;
$color-primary-dark: #28b485;

$color-secondary-light: #ffb900;
$color-secondary-dark: #ff7730;

$color-tertiary-light: #2998ff;
$color-tertiary-dark: #5643fa;

$color-grey-light-1: #f7f7f7;
$color-grey-light-2: #eee;

$color-grey-dark: #777;
$color-grey-dark-2: #999;
$color-grey-dark-3: #333;

$color-white: #fff;
$color-black: #000;
    .navigation {
    &__checkbox {
        display: none;
    }

    &__button {
        background-color: $color-white;
        height: 70px;
        width: 70px;
        position: fixed;
        top: 60px;
        right: 60px;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba($color-black, .1);
        text-align: center;
        cursor: pointer;

        @include respond(tab-port) {
            top: 40px;
            right: 40px;
        }

        @include respond(phone) {
            top: 15px;
            right: 15px;

        }
    }

    &__background {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        position: fixed;
        top: 65px;
        right: 65px;
        background-image: radial-gradient(#8360c3, #2ebf91);
        z-index: 1000;
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

        @include respond(tab-port) {
            top: 45px;
            right: 45px;
        }

        @include respond(phone) {
            top: 25px;
            right: 20px;
        }
    }

    &__nav {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;

        opacity: 0;
        width: 0;
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        list-style: none;
        text-align: center;
        width: 100%;
    }

    &__item {
        margin: 10px;
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 30px;
            font-weight: 300;
            padding: 10px 20px;
            color: $color-white;
            text-decoration: none;
            text-transform: uppercase;
            background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%);
            background-size: 220%;
            transition: all .4s;

            span {
                margin-right: 15px;
                display: inline-block;
            }
        }
        
        &:hover,
        &:active {
            background-position: 100%;
            color: $color-tertiary-light;
            transform: translateX(10px);
        }
    }


    //FUNCTIONALITY
    &__checkbox:checked ~ &__background {
        transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
        opacity: 1;
        width: 100%;
    }


    //ICON
    &__icon {
        position: relative;
        margin-top: 35px;

        &,
        &::before,
        &::after {
            width: 30px;
            height: 2px;
            background-color: $color-grey-dark-3;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before { top: -8px; }
        &::after { top: 8px; }
    }

    &__button:hover &__icon::before {
        top: -10px;
    }

    &__button:hover &__icon::after {
        top: 10px;
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        transform: rotate(-135deg);
    }
}
</style>