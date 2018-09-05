import React from 'react';
import JavaScript from '../img/tw-javascript-opt.svg';
import Html from '../img/tw-html5-opt.svg';
import Css from '../img/tw-css3-opt.svg';
import CPlusPlus from '../img/tw-cplusplus-opt.svg';
import C from '../img/tw-c-opt.svg';

export function displayUserSections() {
    document.getElementById('user-section').style.display = 'inherit';
    document.getElementById('latest-projects-title').style.display = 'inherit';
    // document.getElementById('latest-projects').style.display = 'inherit';

}

export function getAvatar(url) {
    document.getElementById('avatar-img').src = url;
}

export function getBio(bioText) {
    document.getElementById('bio-text').innerText = bioText;
}

export function getRepoCount(repoCount) {
    const repoLength = document.getElementById('latest-projects-title');
    repoLength.innerText = `Latest Projects: (${repoCount})`;

}

export function getUsername(username) {
    const usernameHeading = document.getElementById('username');
    usernameHeading.innerHTML = username;
}

export function getRepos(repos, repoText, repoUrl, repoIssuesCount, repoLanguage){

    if (repoText) {


        const projectsSection = document.getElementById('latest-projects');
        const cardBlock = document.createElement('div');
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardTitle = document.createElement('h5');
        const cardText = document.createElement('p');
        const repoLink = document.createElement('a');
        const issueCount = document.createElement('p');
        const programmingLanguage = document.createElement('p');
        const langImg = document.createElement('img');

        if (repoText.length > 45) {
            repoText = repoText.substring(0, 44) + '...';
        }

        switch (repoLanguage) {
            case 'JavaScript':
                langImg.src = JavaScript;
                break;
            case 'CSS':
                langImg.src = Css;
                break;
            case 'HTML':
                langImg.src = Html;
                break;
            case 'C':
                langImg.src = C;
            case 'C++':
                langImg.src = CPlusPlus;
            default:
                langImg.src = 'server/client/src/img/opensrc-logo-001.png';
                break;
        }


        // const projectsSection = document.getElementById('latest-projects');
        // const card = React.createElement('div');
        // const cardBody = React.createElement('div');
        // const cardTitle = React.createElement('h5');
        // const cardText = React.createElement('p');
        // const repoLink = React.createElement('a');
        // const issueCount = React.createElement('p');
        // const programmingLanguage = React.createElement('p');


        programmingLanguage.innerHTML = repoLanguage;
        issueCount.innerHTML = "Open Issues: " + repoIssuesCount;
        issueCount.classList.add('issue-count');
        repoLink.classList.add('btn', 'btn-primary', 'mt-auto');
        cardBlock.classList.add('col-md-3', 'card-block');
        card.classList.add('card', 'p-2');

        programmingLanguage.classList.add('repo-language');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column');
        cardTitle.classList.add('card-title');
        cardText.classList.add('card-text');

        repoLink.setAttribute('target', '_blank');
        repoLink.innerHTML = 'View Repo';
        repoLink.href = repoUrl;
        cardTitle.innerText = repos;
        cardText.innerText = repoText;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(langImg);
        cardBody.appendChild(programmingLanguage);
        cardBody.appendChild(repoLink);
        cardBody.appendChild(issueCount);
        card.appendChild(cardBody);
        cardBlock.appendChild(card);
        // const cardBlock = React.createElement('div', {className: 'col-md-3 card-block'}, card);
        projectsSection.appendChild(cardBlock);

    }
}

export function requestUserData(username) {
    const url = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);
        getAvatar(data.avatar_url);
        getBio(data.bio);
        getUsername(data.login);
        displayUserSections();
    };
    xhr.send();
}

export function requestUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);
        console.log(data['name']);
        console.log(data.length);


        for (let i in data) {

            const { name, description, html_url, open_issues, language } = data[i];

            getRepos(name, description, html_url, open_issues, language);

        }

        getRepoCount(data.length);
    };

    xhr.send();
}