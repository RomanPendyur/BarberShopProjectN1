'use strict'
const firstOption = document.querySelector('.blog_option_one');
const secondOption = document.querySelector('.blog_option_two');
const theedOption = document.querySelector('.blog_option_three');
const fourOption = document.querySelector('.blog_option_four');

const firstPost = document.querySelector('.first-post');
const secondPost = document.querySelector('.second-post');
const treePost = document.querySelector('.third-post');
const fourPost = document.querySelector('.four-post');


firstOption.addEventListener('click', (event) => {
    firstPost.classList.add('visible-post')
    secondPost.classList.remove('visible-post')
    treePost.classList.remove('visible-post')
    fourPost.classList.remove('visible-post')
})

secondOption.addEventListener('click', (event) => {
    firstPost.classList.remove('visible-post')
    secondPost.classList.add('visible-post')
    treePost.classList.remove('visible-post')
    fourPost.classList.remove('visible-post')
})

theedOption.addEventListener('click', (event) => {
    firstPost.classList.remove('visible-post')
    secondPost.classList.remove('visible-post')
    treePost.classList.add('visible-post')
    fourPost.classList.remove('visible-post')
})

fourOption.addEventListener('click', (event) => {
    firstPost.classList.remove('visible-post')
    secondPost.classList.remove('visible-post')
    treePost.classList.remove('visible-post')
    fourPost.classList.add('visible-post')
})