import { createUser } from '../queries/createUser'

export default class Auth {
  auth: HTMLElement
  btn: HTMLElement
  token: string
  login: HTMLElement
  password: HTMLElement
  constructor (isLogin = true) {
    this.auth = document.getElementById('auth')
    this.btn = document.getElementById('authBtn')
    this.token = localStorage.getItem('token')
    this.login = document.getElementById('login')
    this.password = document.getElementById('password')
    this.mount()
  }
  mount () {
    try {
      console.log('>>>', this.btn)
      this.btn.addEventListener('click', async () => {
        const login = (this.login as HTMLInputElement).value
        // this.login.value = ''
        const password = (this.password as HTMLInputElement).value
        // this.password.value =
        const res = await createUser(login, password)
        console.log(res)
      })
    } catch (error) {
      console.error(error)
    }
  }
}
