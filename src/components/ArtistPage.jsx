import React, { useEffect } from 'react'

function ArtistPage() {
  // Scroll özelliği açık
  useEffect(() => {
    document.body.classList.remove('no-scroll')
    document.documentElement.classList.remove('no-scroll')
    
    return () => {
      // Cleanup gerekmiyor
    }
  }, [])

  // Dummy sanatçı verisi
  const artistData = {
    name: 'Gaye Su Akyol',
    image: '/src/assets/artist/Image (3).png',
    totalRespect: '45.2K',
    bio: 'Türk alternatif rock sahnesinin en özgün seslerinden biri. Psikedelik rock ve Anadolu rock etkilerini modern bir yorumla harmanlayan sanatçı.',
    message: 'Müziği seven herkesi sahnelerimde görmeyi çok istiyorum. Respect\'leriniz için teşekkürler! 🎸',
    monthlyListeners: '156K',
    followers: '23.4K'
  }

  // En çok respect gönderenler
  const topRespectSenders = [
    {
      id: 1,
      username: 'indie_lover',
      avatar: '/src/assets/user/Image.png',
      totalRespect: '2.1K',
      rank: 1,
      change: 'up'
    },
    {
      id: 2,
      username: 'alt_rock_fan',
      avatar: '/src/assets/user/Image (1).png',
      totalRespect: '1.9K',
      rank: 2,
      change: 'same'
    },
    {
      id: 3,
      username: 'music_addict',
      avatar: '/src/assets/user/Image (2).png',
      totalRespect: '1.7K',
      rank: 3,
      change: 'down'
    },
    {
      id: 4,
      username: 'psych_vibes',
      avatar: '/src/assets/user/Image (3).png',
      totalRespect: '1.5K',
      rank: 4,
      change: 'up'
    },
    {
      id: 5,
      username: 'vinyl_collector',
      avatar: '/src/assets/user/Image (4).png',
      totalRespect: '1.3K',
      rank: 5,
      change: 'same'
    }
  ]

  // Son respect gönderenler
  const recentRespectSenders = [
    {
      id: 1,
      username: 'new_fan',
      avatar: '/src/assets/user/Image.png',
      time: '2 dk önce'
    },
    {
      id: 2,
      username: 'concert_goer',
      avatar: '/src/assets/user/Image (1).png',
      time: '5 dk önce'
    },
    {
      id: 3,
      username: 'melody_hunter',
      avatar: '/src/assets/user/Image (2).png',
      time: '8 dk önce'
    },
    {
      id: 4,
      username: 'beat_lover',
      avatar: '/src/assets/user/Image (3).png',
      time: '12 dk önce'
    },
    {
      id: 5,
      username: 'sound_seeker',
      avatar: '/src/assets/user/Image (4).png',
      time: '15 dk önce'
    }
  ]

  // Chat mesajları
  const chatMessages = [
    {
      id: 1,
      username: 'indie_lover',
      avatar: '/src/assets/user/Image.png',
      message: 'Yeni albüm ne zaman çıkıyor?',
      time: '2 dk önce',
      isArtist: false,
      hasRespectPriority: true
    },
    {
      id: 2,
      username: 'Gaye Su Akyol',
      avatar: '/src/assets/artist/Image (3).png',
      message: 'Çok yakında güzel haberler paylaşacağım! 🎸',
      time: '1 dk önce',
      isArtist: true,
      hasRespectPriority: false
    },
    {
      id: 3,
      username: 'alt_rock_fan',
      avatar: '/src/assets/user/Image (1).png',
      message: 'Dün konserindeydim, muhteşemdi!',
      time: '30 sn önce',
      isArtist: false,
      hasRespectPriority: true
    }
  ]

  // Diskografi
  const discography = {
    latest: [
      {
        id: 1,
        title: 'Büyü',
        image: '/src/assets/song/Image (13).png',
        releaseDate: '2024',
        totalRespects: '1.2K',
        listens: '45K'
      },
      {
        id: 2,
        title: 'Ruh',
        image: '/src/assets/song/Image (12).png',
        releaseDate: '2023',
        totalRespects: '2.8K',
        listens: '89K'
      }
    ],
    mostRespected: [
      {
        id: 1,
        title: 'Ruh',
        image: '/src/assets/song/Image (12).png',
        totalRespects: '2.8K',
        listens: '89K'
      },
      {
        id: 2,
        title: 'Büyü',
        image: '/src/assets/song/Image (13).png',
        totalRespects: '1.2K',
        listens: '45K'
      }
    ],
    recentRespects: [
      {
        id: 1,
        title: 'Büyü',
        image: '/src/assets/song/Image (13).png',
        lastRespectTime: '5 dk önce',
        totalRespects: '1.2K'
      },
      {
        id: 2,
        title: 'Ruh',
        image: '/src/assets/song/Image (12).png',
        lastRespectTime: '12 dk önce',
        totalRespects: '2.8K'
      }
    ]
  }

  const getRankIcon = (change) => {
    switch(change) {
      case 'up': return '↗️'
      case 'down': return '↘️'
      default: return '→'
    }
  }

  const getRankClass = (change) => {
    switch(change) {
      case 'up': return 'rank-up'
      case 'down': return 'rank-down'
      default: return 'rank-same'
    }
  }

  return (
    <div className="desktop-artist-page">
      {/* Ana İçerik */}
      <div className="artist-main-content">
        
        {/* A) Sanatçı Header */}
        <section className="artist-header">
          <div className="artist-info">
            <div className="artist-image-container">
              <img src={artistData.image} alt={artistData.name} className="artist-image" />
              <div className="total-respect-badge">
                {artistData.totalRespect} Respect
              </div>
            </div>
            
            <div className="artist-details">
              <h1 className="artist-name">{artistData.name}</h1>
              <div className="artist-stats">
                <span className="stat-item">{artistData.monthlyListeners} aylık dinleyici</span>
                <span className="stat-item">{artistData.followers} takipçi</span>
              </div>
              
              <div className="artist-bio">
                <p className="bio-text">{artistData.bio}</p>
                <div className="artist-message">
                  <h4>Sanatçı Mesajı</h4>
                  <p>{artistData.message}</p>
                </div>
              </div>
              
              <button className="quick-respect-btn">
                Hızlı Respect Gönder
              </button>
            </div>
          </div>
          
          {/* En Çok Respect Gönderenler - Header İçinde */}
          <div className="header-top-respecters">
            <div className="header-respecters-title">
              <h3>Top Respecters</h3>
              <span className="respecters-count">Bu ay</span>
            </div>
            
            <div className="header-respecters-list">
              {topRespectSenders.slice(0, 3).map((user) => (
                <div key={user.id} className="header-respecter-item">
                  <div className="header-rank-badge">
                    <span className="header-rank-number">#{user.rank}</span>
                    <span className={`header-rank-change ${getRankClass(user.change)}`}>
                      {getRankIcon(user.change)}
                    </span>
                  </div>
                  
                  <img src={user.avatar} alt={user.username} className="header-respecter-avatar" />
                  
                  <div className="header-respecter-info">
                    <h5 className="header-respecter-username">{user.username}</h5>
                    <p className="header-respecter-total">{user.totalRespect}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Supporters - Yatay Sıralama */}
        <section className="recent-supporters-horizontal">
          <div className="recent-supporters-header">
            <h3>Recent Supporters</h3>
            <span className="supporters-count">Son 24 saat</span>
          </div>
          
          <div className="recent-supporters-grid">
            {recentRespectSenders.map((user) => (
              <div key={user.id} className="recent-supporter-card">
                <img src={user.avatar} alt={user.username} className="recent-supporter-avatar" />
                <div className="recent-supporter-info">
                  <h5 className="recent-supporter-username">{user.username}</h5>
                  <p className="recent-supporter-amount">{user.amount} respect</p>
                  <span className="recent-supporter-time">{user.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ana Grid Layout */}
        <div className="artist-content-grid">
          
          {/* Sol Kolon - Kaldırıldı */}

          {/* Orta Kolon */}
          <div className="center-column">
            
            {/* E) Diskografi */}
            <section className="discography">
              
              {/* Son Şarkılar */}
              <div className="disco-section">
                <div className="section-header">
                  <h2 className="section-title">Son Şarkılar</h2>
                </div>
                <div className="songs-grid">
                  {discography.latest.map((song) => (
                    <div key={song.id} className="song-card">
                      <img src={song.image} alt={song.title} className="song-image" />
                      <div className="song-info">
                        <h4 className="song-title">{song.title}</h4>
                        <p className="song-meta">{song.releaseDate} • {song.listens} dinlenme</p>
                        <p className="song-respects">{song.totalRespects} respect</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* En Çok Respect Alan Şarkılar */}
              <div className="disco-section">
                <div className="section-header">
                  <h2 className="section-title">En Çok Respect Alan</h2>
                </div>
                <div className="songs-grid">
                  {discography.mostRespected.map((song) => (
                    <div key={song.id} className="song-card">
                      <img src={song.image} alt={song.title} className="song-image" />
                      <div className="song-info">
                        <h4 className="song-title">{song.title}</h4>
                        <p className="song-meta">{song.listens} dinlenme</p>
                        <p className="song-respects">{song.totalRespects} respect</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Son Respect Alan Şarkılar */}
              <div className="disco-section">
                <div className="section-header">
                  <h2 className="section-title">Son Respect Alanlar</h2>
                </div>
                <div className="songs-grid">
                  {discography.recentRespects.map((song) => (
                    <div key={song.id} className="song-card">
                      <img src={song.image} alt={song.title} className="song-image" />
                      <div className="song-info">
                        <h4 className="song-title">{song.title}</h4>
                        <p className="song-meta">Son respect: {song.lastRespectTime}</p>
                        <p className="song-respects">{song.totalRespects} respect</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </div>

        </div>
      </div>

      {/* D) Fixed Chat */}
      <div className="artist-chat-fixed">
        <div className="chat-header">
          <h3 className="chat-title">Sanatçı Sohbeti</h3>
          <div className="chat-info">
            <span className="online-count">34 aktif</span>
          </div>
        </div>

        <div className="chat-messages">
          {chatMessages.map((msg) => (
            <div 
              key={msg.id} 
              className={`chat-message ${msg.isArtist ? 'artist-message' : 'user-message'} ${msg.hasRespectPriority ? 'priority-message' : ''}`}
            >
              <div className="message-content">
                <div className="message-header">
                  <img src={msg.avatar} alt={msg.username} className="message-avatar" />
                  <span className="message-username">{msg.username}</span>
                  {msg.hasRespectPriority && <span className="priority-badge">💎</span>}
                </div>
                <p className="message-text">{msg.message}</p>
                <span className="message-time">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-requirement-notice">
          <p>💡 Sohbete katılmak için bu sanatçıya en az 20 respect göndermiş olmalısınız.</p>
        </div>

        <div className="chat-input-area">
          <input 
            type="text" 
            placeholder="Mesajınızı yazın..." 
            className="chat-input"
            disabled
          />
          <button className="send-button" disabled>Gönder</button>
        </div>
      </div>

      {/* Send Respect Butonu */}
      <button className="fixed-respect-button">
        <span className="respect-text">Send Respect</span>
      </button>
    </div>
  )
}

export default ArtistPage 