import React, { useState } from 'react'

const SongPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)

  const respectAmounts = [50, 100, 250, 500]

  const topRespecters = [
    { id: 1, rank: 1, name: "MusicLover_23", avatar: "/src/assets/user/Image.png", total: "2,340 Respect" },
    { id: 2, rank: 2, name: "BeatMaster", avatar: "/src/assets/user/Image (1).png", total: "1,890 Respect" },
    { id: 3, rank: 3, name: "SoundWave", avatar: "/src/assets/user/Image (2).png", total: "1,567 Respect" },
    { id: 4, rank: 4, name: "VibeSeeker", avatar: "/src/assets/user/Image (3).png", total: "1,234 Respect" },
    { id: 5, rank: 5, name: "RhythmKing", avatar: "/src/assets/user/Image (4).png", total: "1,012 Respect" }
  ]

  const recentRespects = [
    { id: 1, user: "MusicFan_42", avatar: "/src/assets/user/Image.png", amount: "100 Respect", time: "2 dk önce" },
    { id: 2, user: "SongLover", avatar: "/src/assets/user/Image (1).png", amount: "250 Respect", time: "5 dk önce" },
    { id: 3, user: "BeatDropper", avatar: "/src/assets/user/Image (2).png", amount: "50 Respect", time: "8 dk önce" },
    { id: 4, user: "VibeChecker", avatar: "/src/assets/user/Image (3).png", amount: "500 Respect", time: "12 dk önce" },
    { id: 5, user: "RhythmMaster", avatar: "/src/assets/user/Image (4).png", amount: "150 Respect", time: "15 dk önce" },
    { id: 6, user: "SoundHunter", avatar: "/src/assets/user/Image.png", amount: "75 Respect", time: "18 dk önce" },
    { id: 7, user: "MelodyMaker", avatar: "/src/assets/user/Image (1).png", amount: "300 Respect", time: "22 dk önce" },
    { id: 8, user: "WaveRider", avatar: "/src/assets/user/Image (2).png", amount: "125 Respect", time: "25 dk önce" },
    { id: 9, user: "BassBeast", avatar: "/src/assets/user/Image (3).png", amount: "200 Respect", time: "28 dk önce" },
    { id: 10, user: "TuneMaster", avatar: "/src/assets/user/Image (4).png", amount: "80 Respect", time: "30 dk önce" }
  ]

  const otherSongs = [
    { id: 1, title: "Midnight Dreams", cover: "/src/assets/song/Image.png", meta: "3:24 • 2023", respects: "1.2K" },
    { id: 2, title: "City Lights", cover: "/src/assets/song/Image (1).png", meta: "4:01 • 2023", respects: "890" },
    { id: 3, title: "Ocean Waves", cover: "/src/assets/song/Image (2).png", meta: "3:47 • 2022", respects: "756" },
    { id: 4, title: "Forest Path", cover: "/src/assets/song/Image (3).png", meta: "3:12 • 2022", respects: "634" },
    { id: 5, title: "Desert Wind", cover: "/src/assets/song/Image (4).png", meta: "4:28 • 2022", respects: "523" },
    { id: 6, title: "Mountain Peak", cover: "/src/assets/song/Image (5).png", meta: "3:56 • 2021", respects: "445" }
  ]

  const chatMessages = [
    { id: 1, username: "MusicLover", avatar: "/src/assets/user/Image.png", message: "Bu şarkı harika! 🎵", time: "14:23", isArtist: false, hasRespectPriority: false },
    { id: 2, username: "The Midnight Collective", avatar: "/src/assets/artist/Image.png", message: "Teşekkürler! Bu parçayı yaratırken çok eğlendik", time: "14:25", isArtist: true, hasRespectPriority: false },
    { id: 3, username: "BeatMaster", avatar: "/src/assets/user/Image (2).png", message: "Sanatçının en iyi şarkısı bence", time: "14:27", isArtist: false, hasRespectPriority: true },
    { id: 4, username: "SoundWave", avatar: "/src/assets/user/Image (3).png", message: "Spotify'da tekrar tekrar dinliyorum", time: "14:30", isArtist: false, hasRespectPriority: false }
  ]

  return (
    <div className="song-page">
      <div className="song-content">
        
        {/* A) Enhanced Song Header */}
        <div className="song-header">
          <div className="song-info">
            <div className="song-album-cover">
              <img src="/src/assets/song/Image.png" alt="Song Cover" />
            </div>
            <div className="song-details">
              <div className="song-title-section">
                <h1>Sunset Boulevard</h1>
                <h2>The Midnight Collective</h2>
              </div>
              <div className="song-respect-info">
                <div className="total-respect-badge">
                  5,247 Total Respect
                </div>
                <div className="song-buttons">
                  <button className="play-spotify-button">
                    Spotify'da Dinle
                  </button>
                  <button className="quick-respect-button">
                    Hızlı Respect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="song-main-grid">
          
          {/* Left Column */}
          <div className="song-left-column">
            
            {/* C) En Çok Respect Gönderenler */}
            <div className="top-respecters-section">
              <div className="section-header">
                <h3 className="section-title">En Çok Respect Gönderenler</h3>
                <p className="section-subtitle">Bu şarkıya en çok destek verenler</p>
              </div>
              <div className="respecters-list">
                {topRespecters.map(respecter => (
                  <div key={respecter.id} className="respecter-item">
                    <div className="respecter-rank">{respecter.rank}</div>
                    <img src={respecter.avatar} alt={respecter.name} className="respecter-avatar" />
                    <div className="respecter-info">
                      <div className="respecter-name">{respecter.name}</div>
                      <div className="respecter-total">{respecter.total}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* F) Sanatçıdan Diğer Şarkılar */}
            <div className="artist-other-songs">
              <div className="section-header">
                <h3 className="section-title">Sanatçıdan Diğer Şarkılar</h3>
                <p className="section-subtitle">The Midnight Collective'den daha fazla müzik</p>
              </div>
              <div className="artist-songs-grid">
                {otherSongs.map(song => (
                  <div key={song.id} className="artist-song-card">
                    <img src={song.cover} alt={song.title} className="artist-song-cover" />
                    <div className="artist-song-info">
                      <div className="artist-song-title">{song.title}</div>
                      <div className="artist-song-meta">{song.meta}</div>
                      <div className="artist-song-respects">{song.respects} Respect</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="song-right-column">
            
            {/* B) Respect Gönder Section */}
            <div className="send-respect-section">
              <div className="respect-section-header">
                <h3 className="respect-section-title">Respect Gönder</h3>
                <p className="respect-section-subtitle">Bu harika şarkıya desteğini göster</p>
              </div>
              <div className="respect-amount-grid">
                {respectAmounts.map(amount => (
                  <button 
                    key={amount}
                    className={`respect-amount-button ${selectedAmount === amount ? 'selected' : ''}`}
                    onClick={() => setSelectedAmount(amount)}
                  >
                    {amount} Respect
                  </button>
                ))}
              </div>
              <button className="send-respect-btn">
                Respect Gönder
              </button>
            </div>

            {/* D) Son Respectler */}
            <div className="recent-respects-section">
              <div className="section-header">
                <h3 className="section-title">Son Respectler</h3>
                <p className="section-subtitle">En son gönderilen destekler</p>
              </div>
              <div className="recent-respects-list">
                {recentRespects.map(respect => (
                  <div key={respect.id} className="recent-respect-item">
                    <img src={respect.avatar} alt={respect.user} className="recent-respect-avatar" />
                    <div className="recent-respect-info">
                      <div className="recent-respect-user">{respect.user}</div>
                      <div className="recent-respect-amount">{respect.amount}</div>
                    </div>
                    <div className="recent-respect-time">{respect.time}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* E) Fixed Chat - Same as Artist Chat */}
        <div className="song-chat-fixed">
          <div className="chat-header">
            <h3 className="chat-title">Şarkı Sohbeti</h3>
            <div className="chat-info">
              <span className="online-count">127 online</span>
            </div>
          </div>

          <div className="chat-messages">
            {chatMessages.map(message => (
              <div 
                key={message.id} 
                className={`song-chat-message ${message.isArtist ? 'song-artist-message' : 'song-user-message'} ${message.hasRespectPriority ? 'song-priority-message' : ''}`}
              >
                <div className="song-message-content">
                  <div className="song-message-header">
                    <img src={message.avatar} alt={message.username} className="song-message-avatar" />
                    <span className="song-message-username">{message.username}</span>
                    {message.hasRespectPriority && <span className="song-priority-badge">💎</span>}
                  </div>
                  <p className="song-message-text">{message.message}</p>
                  <span className="song-message-time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="song-chat-requirement-notice">
            <p>💡 Sohbete katılmak için bu şarkıya en az 20 respect göndermiş olmalısınız.</p>
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

      </div>

      {/* Send Respect Butonu */}
      <button className="fixed-respect-button">
        <span className="respect-text">Send Respect</span>
      </button>
    </div>
  )
}

export default SongPage 