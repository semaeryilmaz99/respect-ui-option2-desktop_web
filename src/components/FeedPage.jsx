import React, { useState, useEffect } from 'react'

const FeedPage = () => {
  const [activeTab, setActiveTab] = useState('community')

  // Scroll özelliği açık
  useEffect(() => {
    // Scroll serbest bırakıldı
    document.body.classList.remove('no-scroll')
    document.documentElement.classList.remove('no-scroll')
    
    return () => {
      // Cleanup gerekmiyor
    }
  }, [])

  // Dummy data - gerçek uygulamada API'den gelecek
  const communityFeedData = [
    {
      id: 1,
      type: 'high-respect',
      title: 'Gaye Su Akyol - Istakoz',
      subtitle: '3.2K respect aldı',
      avatar: '/src/assets/artist/Image.png',
      time: '2 saat önce',
      respectCount: 3200
    },
    {
      id: 2,
      type: 'new-release',
      title: 'Yeni Şarkı: Altın Gün - Leyla',
      subtitle: 'Yeni çıktı',
      avatar: '/src/assets/artist/Image (1).png',
      time: '3 saat önce',
      isNew: true
    },
    {
      id: 3,
      type: 'chat-reply',
      title: 'Kalben mesajını yanıtladı',
      subtitle: '"Çok güzel! Teşekkürler"',
      avatar: '/src/assets/artist/Image (2).png',
      time: '5 saat önce',
      hasReply: true
    },
    {
      id: 4,
      type: 'trending',
      title: 'Trending: Büyük Ev Ablukada - Yanımda Kal',
      subtitle: 'Bu hafta en çok dinlenen',
      avatar: '/src/assets/artist/Image (3).png',
      time: '1 gün önce',
      isTrending: true
    },
    {
      id: 5,
      type: 'respect-notification',
      title: 'underground_beats respect gönderdi',
      subtitle: 'She Past Away - Rituel şarkısına',
      avatar: '/src/assets/user/Image.png',
      time: '2 gün önce',
      respectSent: true
    }
  ]

  const personalFeedData = [
    {
      id: 6,
      type: 'followed-respect',
      title: 'Takip ettiğin sanatçıya respect geldi',
      subtitle: 'Duman - Senden Daha Güzel - 180 respect',
      avatar: '/src/assets/artist/Image (4).png',
      time: '1 saat önce',
      isFollowed: true
    },
    {
      id: 7,
      type: 'followed-new-song',
      title: 'Yeni şarkı: Ceylan Ertem - Kor',
      subtitle: 'Takip ettiğin sanatçıdan',
      avatar: '/src/assets/artist/Image (5).png',
      time: '4 saat önce',
      isNew: true,
      isFollowed: true
    },
    {
      id: 8,
      type: 'followed-chat',
      title: 'Hayko Cepkin chat\'te aktif',
      subtitle: 'Takip ettiğin sanatçı mesaj yazdı',
      avatar: '/src/assets/artist/Image (6).png',
      time: '6 saat önce',
      isFollowed: true,
      hasReply: true
    },
    {
      id: 9,
      type: 'chat-response',
      title: 'Mesajına yanıt geldi',
      subtitle: 'Teoman: "Müziğe olan sevginiz çok güzel"',
      avatar: '/src/assets/artist/Image (7).png',
      time: '1 gün önce',
      hasReply: true,
      isPersonal: true
    }
  ]

  // Chat verileri
  const chatMessages = [
    {
      id: 1,
      user: 'indie_lover',
      avatar: '/src/assets/user/Image.png',
      message: 'Gaye Su Akyol\'un yeni albümü ne zaman çıkıyor acaba?',
      time: '2 dk önce',
      isOnline: true
    },
    {
      id: 2,
      user: 'altın_gün_fan',
      avatar: '/src/assets/user/Image (1).png',
      message: 'Dün Zorlu\'da She Past Away konserindeydi. Muhteşemdi!',
      time: '5 dk önce',
      isOnline: true
    },
    {
      id: 3,
      user: 'psychedelic_vibes',
      avatar: '/src/assets/user/Image (2).png',
      message: 'Kalben\'in sesiyle Teoman\'ın düeti olsa çok güzel olur',
      time: '8 dk önce',
      isOnline: false
    },
    {
      id: 4,
      user: 'underground_beats',
      avatar: '/src/assets/user/Image (3).png',
      message: 'Büyük Ev Ablukada\'nın eski albümlerini tekrar dinliyorum',
      time: '12 dk önce',
      isOnline: true
    },
    {
      id: 5,
      user: 'duman_forever',
      avatar: '/src/assets/user/Image (4).png',
      message: 'Respect sistemi çok güzel olmuş, artık sanatçıları desteklemek daha kolay',
      time: '15 dk önce',
      isOnline: false
    }
  ]

  // Yeni şarkı verisi
  const newSongData = {
    id: 'new-song-1',
    type: 'new-release',
    artist: 'Gaye Su Akyol',
    title: 'Yeni Single: "Büyü"',
    description: 'Alternatif rock sahnesinin en özgün seslerinden Gaye Su Akyol\'un yeni single\'ı "Büyü" yayında!',
    image: '/src/assets/song/Image (13).png',
    time: '2 saat önce',
    stats: {
      listens: '12.5K',
      respects: '89',
      shares: '23'
    }
  }

  const ChatMessage = ({ message }) => (
    <div className="chat-message">
      <div className="message-avatar">
        <img src={message.avatar} alt={message.user} />
        {message.isOnline && <div className="online-indicator"></div>}
      </div>
      <div className="message-content">
        <div className="message-header">
          <span className="username">{message.user}</span>
          <span className="message-time">{message.time}</span>
        </div>
        <p className="message-text">{message.message}</p>
      </div>
    </div>
  )

  const FeedCard = ({ item }) => {
    const getCardColor = (type) => {
      if (type.includes('respect')) return 'respect-card'
      if (type.includes('chat')) return 'chat-card'
      if (type.includes('new') || type.includes('trending')) return 'release-card'
      if (type.includes('followed')) return 'followed-card'
      return 'default-card'
    }

          return (
        <div className={`desktop-feed-card ${getCardColor(item.type)}`}>
          <div className="feed-card-header">
            <div className="card-time">{item.time}</div>
          </div>
        
        <div className="feed-card-content">
          <div className="card-avatar">
            <img src={item.avatar} alt="Avatar" />
            {item.isNew && <div className="new-badge">YENİ</div>}
            {item.isTrending && <div className="trending-badge">TREND</div>}
          </div>
          
          <div className="card-text">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-subtitle">{item.subtitle}</p>
          </div>
        </div>
        
        <div className="feed-card-actions">
          {item.respectCount && (
            <div className="respect-count">{item.respectCount} respect</div>
          )}
          <button className="card-action-btn">
            {item.hasReply ? 'Mesajı Gör' : 
             item.respectSent ? 'Detay' : 
             item.isNew ? 'Dinle' : 'İncele'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="desktop-feed-page">
      <div className="feed-header">
        <div className="feed-tabs">
          <button 
            className={`tab-button ${activeTab === 'community' ? 'active' : ''}`}
            onClick={() => setActiveTab('community')}
          >
            Topluluk
          </button>
          <button 
            className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Sana Özel
          </button>
        </div>
      </div>

      <div className="feed-content">
        <div className="feed-layout">
          {/* Sol taraf - Respect Cards */}
          <div className="respect-section">
            <div className="respect-header">
              <h2 className="respect-title">Respect Akışı</h2>
              <p className="respect-subtitle">Öne çıkan respectler</p>
            </div>
            
            <div className="respect-cards">
              {(activeTab === 'community' ? communityFeedData : personalFeedData)
                .filter(item => item.type.includes('respect'))
                .map(item => (
                  <FeedCard key={item.id} item={item} />
                ))}
            </div>
            
            {/* Yeni Şarkı Kartı */}
            <div className="new-song-card">
              <div className="new-song-header">
                <h3 className="new-song-title">Yeni Şarkı</h3>
              </div>
              <div className="new-song-content">
                <img src={newSongData.image} alt={newSongData.title} className="new-song-image" />
                <div className="new-song-info">
                  <h4 className="new-song-artist">{newSongData.artist}</h4>
                  <p className="new-song-track">{newSongData.title}</p>
                  <p className="new-song-description">{newSongData.description}</p>
                  <div className="new-song-stats">
                    <span className="stat-item">{newSongData.stats.listens} dinlenme</span>
                    <span className="stat-item">{newSongData.stats.respects} respect</span>
                    <span className="stat-item">{newSongData.stats.shares} paylaşım</span>
                  </div>
                  <div className="new-song-actions">
                    <button className="play-button">Dinle</button>
                    <button className="respect-button">Respect</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orta - Diğer Cards */}
          <div className="general-section">
            <div className="section-header">
              <h2 className="section-title">
                {activeTab === 'community' ? 'Topluluk Akışı' : 'Sana Özel Akış'}
              </h2>
              <p className="section-subtitle">
                {activeTab === 'community' 
                  ? 'Respect topluluğunda neler oluyor?' 
                  : 'Takip ettiklerinden ve senin için özel haberler'}
              </p>
            </div>
            
            <div className="feed-grid">
              {(activeTab === 'community' ? communityFeedData : personalFeedData)
                .filter(item => !item.type.includes('respect'))
                .map(item => (
                  <FeedCard key={item.id} item={item} />
                ))}
            </div>
          </div>

          {/* Sağ taraf - Chat */}
          <div className="chat-section">
            <div className="chat-header">
              <h2 className="chat-title">Topluluk Sohbeti</h2>
              <div className="online-count">12 kişi aktif</div>
            </div>
            
            <div className="chat-messages">
              {chatMessages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
            
            <div className="chat-input-area">
              <input 
                type="text" 
                placeholder="Mesajını yaz..." 
                className="chat-input"
              />
              <button className="send-button">Gönder</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sabit Send Respect Butonu */}
      <button className="fixed-respect-button">
        <span className="respect-text">Send Respect</span>
      </button>
    </div>
  )
}

export default FeedPage 