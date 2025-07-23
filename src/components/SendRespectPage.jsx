import React, { useState } from 'react'

const SendRespectPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')

  const respectAmounts = [50, 100, 200, 500, 1000]
  const averageAmount = 180

  const recentSupporters = [
    { name: "MusicLover_23", amount: 250 },
    { name: "BeatMaster", amount: 150 },
    { name: "SoundWave", amount: 300 },
    { name: "VibeSeeker", amount: 100 },
    { name: "RhythmKing", amount: 400 }
  ]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const handleQuickRespect = () => {
    console.log(`Quick sending ${averageAmount} respect to Sunset Boulevard`)
    // Quick respect logic
  }

  const handleSendRespect = () => {
    const amount = selectedAmount || parseInt(customAmount)
    if (amount) {
      console.log(`Sending ${amount} respect to Sunset Boulevard`)
      // Send respect logic will be implemented later
    }
  }

  return (
    <div className="send-respect-page">
      <div className="respect-header">
        <h1 className="respect-title">Respect Gönder</h1>
      </div>

      <div className="respect-content">
        
        {/* Left Column */}
        <div className="respect-left-column">
          {/* Artist Thank You Message */}
          <div className="artist-message">
            <h3>The Midnight Collective</h3>
            <p>"Bu şarkıyı dinlediğiniz ve desteğinizi göstermeyi düşündüğünüz için çok teşekkürler! Sizin gibi müzik severlerin desteği bizi motive ediyor."</p>
          </div>

          {/* Song Info Section */}
        <div className="song-info-section">
          <div className="song-cover">
              <img src="/src/assets/song/Image.png" alt="Sunset Boulevard" />
            </div>
            <div className="song-details">
              <h2 className="song-name">Sunset Boulevard</h2>
              <p className="artist-name">The Midnight Collective</p>
            </div>
          </div>

          {/* Quick Respect Section */}
          <div className="quick-respect-section">
            <h3 className="quick-respect-title">Tek Tıkla Respect</h3>
            <p className="quick-respect-subtitle">Hızlı destekle sanatçıyı mutlu et!</p>
            <button className="quick-respect-button" onClick={handleQuickRespect}>
              {averageAmount} Respect Gönder
            </button>
          </div>

          {/* Statistics Section */}
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-icon"></div>
              <p className="stat-text">Bugün bu şarkıya respect gönderen 18. kişisiniz!</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon"></div>
              <p className="stat-text">Son respect gönderen 5 kişi: {recentSupporters.slice(0, 3).map(s => s.name).join(', ')}</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon"></div>
              <p className="stat-text">Bu şarkının toplam respect miktarı: 5,247</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="respect-right-column">
          {/* Amount Selection */}
        <div className="amount-selection">
            <h3 className="section-title">Respect Miktarını Seç</h3>
            <p className="section-subtitle">Ne kadar destek olmak istiyorsun?</p>
            
            {/* Average Suggestion */}
            <div className="average-suggestion">
              <p>Tek seferde gönderilen ortalama miktar: <span className="average-amount">{averageAmount} Respect</span></p>
            </div>
          
          <div className="amount-grid">
            {respectAmounts.map((amount) => (
              <button
                key={amount}
                className={`amount-button ${selectedAmount === amount ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amount)}
              >
                {amount} Respect
              </button>
            ))}
          </div>

          <input
            type="number"
              placeholder="Özel miktar girin (min: 50)"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="custom-amount-input"
              min="50"
          />
        </div>

        <button 
          className="send-support-button"
          onClick={handleSendRespect}
          disabled={!selectedAmount && !customAmount}
        >
            Respect Gönder ve Destekle
        </button>
        </div>
      </div>
    </div>
  )
}

export default SendRespectPage 