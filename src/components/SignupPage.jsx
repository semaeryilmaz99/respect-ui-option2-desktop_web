import React, { useState, useEffect } from 'react'

const SignupPage = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreeNewsletter, setAgreeNewsletter] = useState(false)

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

  const handleSignup = (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert('Şifreler eşleşmiyor!')
      return
    }
    
    if (!agreeTerms) {
      alert('Kullanım koşullarını kabul etmelisiniz!')
      return
    }
    
    // Signup logic will be implemented later
    console.log('Signup attempt:', { fullName, email, password, agreeNewsletter })
  }

  const handleSpotifySignup = () => {
    // Spotify OAuth logic will be implemented later
    console.log('Spotify signup clicked')
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

        {/* Sağ taraf - Signup form */}
        <div className="login-form-section">
          <div className="login-container-desktop signup-container-desktop">
            <div className="login-header-desktop">
              <h2 className="login-title-desktop">Hesap Oluştur</h2>
              <p className="login-subtitle-desktop">
                Respect topluluğuna katılın ve müzik dünyasını keşfedin
              </p>
            </div>

            <button onClick={handleSpotifySignup} className="spotify-login-button-desktop">
              <div className="spotify-button-content">
                <img src="/src/assets/spotify.jpg" alt="Spotify" className="spotify-icon-desktop" />
                <span>Spotify ile Kayıt Ol</span>
              </div>
            </button>

            <div className="divider-desktop">
              <span className="divider-text-desktop">veya email ile kayıt ol</span>
            </div>

            <form className="login-form-desktop" onSubmit={handleSignup}>
              <div className="input-group-desktop">
                <label htmlFor="fullName" className="input-label-desktop">Ad Soyad</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Adınız ve Soyadınız"
                  className="login-input-desktop"
                  required
                />
              </div>

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

              <div className="input-group-desktop">
                <label htmlFor="confirmPassword" className="input-label-desktop">Şifre Tekrarı</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="login-input-desktop"
                  required
                />
              </div>

              <div className="signup-checkboxes">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="signup-checkbox"
                    required
                  />
                  <label htmlFor="agreeTerms" className="checkbox-label">
                    <a href="#terms" className="terms-link">Kullanım Koşullarını</a> ve <a href="#privacy" className="terms-link">Gizlilik Politikasını</a> kabul ediyorum
                  </label>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="agreeNewsletter"
                    checked={agreeNewsletter}
                    onChange={(e) => setAgreeNewsletter(e.target.checked)}
                    className="signup-checkbox"
                  />
                  <label htmlFor="agreeNewsletter" className="checkbox-label">
                    Yeni müzik ve etkinlikler hakkında email almak istiyorum
                  </label>
                </div>
              </div>

              <button type="submit" className="login-button-desktop">
                <span>Hesap Oluştur</span>
                <div className="button-arrow">→</div>
              </button>
            </form>

            <div className="login-footer-desktop">
              <div className="signup-section-desktop">
                <span className="signup-text-desktop">Zaten hesabın var mı?</span>
                <a href="#login" className="signup-link-desktop">Giriş Yap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage 