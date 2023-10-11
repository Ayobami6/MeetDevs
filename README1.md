![Logo](static/assets/new-peers.png)

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source-175x29.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

![Languages](https://img.shields.io/github/languages/top/Ayobami6/peers)
![GitHub repo size](https://img.shields.io/github/repo-size/Ayobami6/peers)
![GitHub issues](https://img.shields.io/github/issues/Ayobami6/peers)
![GitHub closed issues](https://img.shields.io/github/issues-closed/Ayobami6/peers)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Ayobami6/peers)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/Ayobami6/peers)
![GitHub](https://img.shields.io/github/license/Ayobami6/peers)
![GitHub Repo stars](https://img.shields.io/github/stars/Ayobami6/peers?style=social)
![GitHub forks](https://img.shields.io/github/forks/Ayobami6/peers?style=social)
![GitHub contributors](https://img.shields.io/github/contributors/Ayobami6/peers)

Peers is a website that helps Alx Students of software engineering learn better, faster and do hard stuffs easily with colleagues and peers of the same cohort and different cohorts

Peers features are;

- Learn: This is a feature that allows student to learn with colleagues and peers on different tasks
- Mentor: This is a feature where peers can register to mentor others on a particular concept they want to talk about and teach, when a mentor register to mentor, all members of peers gets notified of the new mentor session.
- Ask gpt: This feature allows members of peers to ask chat gpt for advice on anything relating to software engineering alone, anything aside that gpt won't respond with what they expect.
- Post: This features allows members to post questions, articles, react to posts and comments
  and more.

## Contributing

<details>
<summary>
Steps
</summary>

- Star the repository

![star repo](https://docs.github.com/assets/images/help/stars/starring-a-repository.png)

- Fork the repository

![fork image](https://www.earthdatascience.org/images/earth-analytics/git-version-control/githubguides-bootcamp-fork.png)

- Clone the forked repo to your local machine

```bash
git clone <url>
```

- Create a branch

```bash
git branch <branch name>
```

- Add your changes

- Create a pull request from your development branch to the upstream development branch

- Not sure of changes to make?

Check the Project section of the original repo for projects todo list or Click Goto Project below

[Goto Project](https://github.com/users/Ayobami6/projects/1)

or Goto Issues and choose any issues to fix

[Issues](https://github.com/Ayobami6/peers/issues)

</details>

## Project Setup

<details>
<summary>
Steps
</summary>

- Create a folder with name peers on your local machine

```bash
mkdir peers
cd peers
git clone <url> .
```

- Create virtual environment for linux and MacOX

```bash
python3 -m venv venv
```

- Activate venv

```bash
. venv/bin/activate
```

for Windows

```bash
> mkdir peers
> cd peers
> py -3 -m venv venv
```

Activate for Windows

```bash
venv\Scripts\activate
```

- Install all project dependecies

```bash
pip install -r requirements.txt
```

- Create `.env` file inside the root of peers to store your OpenAI Api
  Or run

```bash
cp .env.example .env
```

then open the `.env` file to update your chatgpt api key

- Requesting the Postgresql database admin

Send an email [here](mailto:ayobamidele006@gmail.com) or Create and issue requesting it and specify changes to make or issues to fix

- Test the app from your local machine

Run

```bash
python manage.py runserver
```

Then open the generated port and host with your web browser with home endpoint

Like this

```
http://127.0.0.1:8000/home
```

If you encouter an issue setting up
create an Issue [here](https://github.com/Ayobami6/peers/issues)

</details>

## Project Tools

- Python django
- Boostrap
- RDMS (Postgresql or Mysql or Sqlite)
- Html and Css
- FontAwesome Icons
- Docker
- Github Pages for development
- Github Actions for CI
- Github Projects for Project management
- Github Discussions
- Chatgpt Api
- Pytest for unit testing
- Pycodestyle for python code style

## A beginner?

Not a problem checkout resources listed to get you started

- [Django-guide-pdf](https://drive.google.com/file/d/1untLdjlgNQJdKIM9RzpwLEgMOEwTQc3l/view?usp=share_link)
- [Boostrap](https://www.freecodecamp.org/learn/front-end-development-libraries/)
- [Html-Css](https://www.freecodecamp.org/learn/2022/responsive-web-design/)

## Development environmennt Code Linter and Formatter tools tools recommendations

- Pycodestyle
- Prettier Formatter
- AutoPep8 Formatter

### Keep Your Fork up to date

You can automatically keep your fork up to date by using [pull](https://github.com/wei/pull) by [@wei](https://github.com/wei/)

## Contributors

<a href="https://github.com/Ayobami6/peers/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Ayobami6/peers" />
</a>
