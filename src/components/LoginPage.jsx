import React, { useState, useEffect } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Sayfa yüklendiğinde scroll'u engelle
  useEffect(() => {
    // Scroll'u engelle
    document.body.classList.add('no-scroll')
    document.documentElement.classList.add('no-scroll')
    
    // Component unmount olduğunda scroll'u geri aç
    return () => {
      document.body.classList.remove('no-scroll')
      document.documentElement.classList.remove('no-scroll')
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    // Login logic will be implemented later
    console.log('Login attempt:', { email, password })
  }

  const handleSpotifyLogin = () => {
    // Spotify OAuth logic will be implemented later
    console.log('Spotify login clicked')
  }

  return (
    <div className="desktop-login-page">
      <div className="desktop-login-content">
        {/* Sol taraf - Hero section */}
        <div className="login-hero-section">
          <div className="hero-content">
            <div className="hero-logo">
              <div className="logo-circle">
                <span className="logo-text">R</span>
              </div>
            </div>
            <h1 className="hero-title">Respect Müzik</h1>
            <p className="hero-subtitle">
            Sanatçılarını destekle, müziğe respect gönder
          </p>
            <div className="hero-features">
              <div className="feature-item">
                <span>Sevdiğin müzikleri keşfet</span>
              </div>
              <div className="feature-item">
                <span>Sanatçıları destekle</span>
              </div>
              <div className="feature-item">
                <span>Respect topluluğuna katıl</span>
              </div>
            </div>
          </div>
          <div className="hero-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>

        {/* Sağ taraf - Login form */}
        <div className="login-form-section">
          <div className="login-container-desktop">
            <div className="login-header-desktop">
              <h2 className="login-title-desktop">Hoş Geldin!</h2>
              <p className="login-subtitle-desktop">
                Hesabınıza giriş yaparak müzik dünyasına katılın
              </p>
            </div>

            <button onClick={handleSpotifyLogin} className="spotify-login-button-desktop">
              <div className="spotify-button-content">
                <img src="/src/assets/spotify.jpg" alt="Spotify" className="spotify-icon-desktop" />
                <span>Spotify ile Devam Et</span>
              </div>
        </button>

            <div className="divider-desktop">
              <span className="divider-text-desktop">veya email ile giriş yap</span>
        </div>

            <form className="login-form-desktop" onSubmit={handleLogin}>
              <div className="input-group-desktop">
                <label htmlFor="email" className="input-label-desktop">Email Adresin</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@email.com"
                  className="login-input-desktop"
              required
            />
          </div>

              <div className="input-group-desktop">
                <label htmlFor="password" className="input-label-desktop">Şifren</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="login-input-desktop"
              required
            />
          </div>

              <button type="submit" className="login-button-desktop">
                <span>Giriş Yap</span>
                <div className="button-arrow">→</div>
          </button>
        </form>

            <div className="login-footer-desktop">
              <a href="#forgot" className="forgot-link-desktop">
            Şifremi Unuttum
          </a>
          
              <div className="signup-section-desktop">
                <span className="signup-text-desktop">Henüz hesabın yok mu?</span>
                <a href="#signup" className="signup-link-desktop">Hemen Kayıt Ol</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 