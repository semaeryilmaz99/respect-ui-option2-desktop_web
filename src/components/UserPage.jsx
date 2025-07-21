import React, { useState } from 'react'

const UserPage = () => {
  const [showEditModal, setShowEditModal] = useState(false)
  const [respectVisible, setRespectVisible] = useState(true)
  const [formData, setFormData] = useState({
    name: 'Alex Rodriguez',
    bio: 'Indie rock tutkunu. Sanatçıları desteklemeyi seven biri.',
    respectCount: 2847,
    respectVisible: true
  })

  // Dummy data
  const currentlyPlaying = {
    song: "Midnight City",
    artist: "M83",
    cover: "/src/assets/song/Image (5).png"
  }

  const topArtists = [
    { id: 1, name: "Arctic Monkeys", respectCount: 450, cover: "/src/assets/artist/Image (1).png", isTopRespecter: true },
    { id: 2, name: "Tame Impala", respectCount: 380, cover: "/src/assets/artist/Image (2).png", isTopRespecter: false },
    { id: 3, name: "The Strokes", respectCount: 320, cover: "/src/assets/artist/Image (3).png", isTopRespecter: false },
    { id: 4, name: "Mac DeMarco", respectCount: 290, cover: "/src/assets/artist/Image (4).png", isTopRespecter: false },
    { id: 5, name: "King Krule", respectCount: 250, cover: "/src/assets/artist/Image (5).png", isTopRespecter: false },
    { id: 6, name: "Radiohead", respectCount: 220, cover: "/src/assets/artist/Image (6).png", isTopRespecter: false }
  ]

  const topSongs = [
    { id: 1, name: "Do I Wanna Know?", artist: "Arctic Monkeys", respectCount: 85, cover: "/src/assets/song/Image (1).png" },
    { id: 2, name: "The Less I Know The Better", artist: "Tame Impala", respectCount: 72, cover: "/src/assets/song/Image (2).png" },
    { id: 3, name: "Last Nite", artist: "The Strokes", respectCount: 68, cover: "/src/assets/song/Image (3).png" },
    { id: 4, name: "Chamber of Reflection", artist: "Mac DeMarco", respectCount: 55, cover: "/src/assets/song/Image (4).png" },
    { id: 5, name: "Easy Easy", artist: "King Krule", respectCount: 42, cover: "/src/assets/song/Image (5).png" }
  ]

  const handleEditProfile = () => {
    setShowEditModal(true)
  }

  const handleCloseModal = () => {
    setShowEditModal(false)
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setShowEditModal(false)
    // Form verilerini kaydet
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const toggleRespectVisibility = () => {
    setRespectVisible(!respectVisible)
  }

  return (
    <div className="user-page">
      {/* A) User Header - Kullanıcı Bilgileri */}
      <div className="user-header">
        <div className="user-header-content">
          <div className="user-profile-info">
            <div className="user-avatar-large">
              <img src="/src/assets/user/Image (1).png" alt="User Avatar" />
            </div>
            <div className="user-details">
              <h1 className="user-name">{formData.name}</h1>
              <p className="user-bio">{formData.bio}</p>
            </div>
          </div>
          
          {/* C) Şu An Ne Dinliyor - Header içine taşındı */}
          <div className="now-playing-section">
            <h2 className="now-playing-title">Şu An Dinliyor</h2>
            <div className="now-playing-card">
              <div className="now-playing-cover">
                <img src={currentlyPlaying.cover} alt={currentlyPlaying.song} />
              </div>
              <div className="now-playing-info">
                <h3 className="now-playing-song">{currentlyPlaying.song}</h3>
                <p className="now-playing-artist">{currentlyPlaying.artist}</p>
                <p className="now-playing-encourage">
                  "Bu şarkıyı da sevebilirsiniz - birlikte dinleyelim!"
                </p>
              </div>
              <button className="listen-together-btn">
                Birlikte Dinle
              </button>
            </div>
          </div>
        </div>
        
        <div className="user-actions">
          {/* B) Toplam Respect Counter */}
          {respectVisible && (
            <div className="respect-counter">
              <div>
                <div className="respect-count">{formData.respectCount.toLocaleString()}</div>
                <div className="respect-label">Toplam Respect</div>
              </div>
              <button className="toggle-respect" onClick={toggleRespectVisibility}>
                Gizle
              </button>
            </div>
          )}
          
          {!respectVisible && (
            <button className="toggle-respect" onClick={toggleRespectVisibility}>
              Respect Sayısını Göster
            </button>
          )}
          
          {/* F) Edit Profile Button */}
          <button className="edit-profile-btn" onClick={handleEditProfile}>
            Profili Düzenle
          </button>
        </div>
      </div>

      {/* D & E) Main Content Grid */}
      <div className="user-main-content">
        {/* D) En Çok Respect Gönderdiği Sanatçılar */}
        <div className="user-section">
          <h2 className="section-title">En Çok Desteklediği Sanatçılar</h2>
          <div className="top-artists-list">
            {topArtists.map((artist) => (
              <div 
                key={artist.id} 
                className={`artist-item ${artist.isTopRespecter ? 'top-respecter' : ''}`}
              >
                <div className="artist-avatar">
                  <img src={artist.cover} alt={artist.name} />
                </div>
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-respect-count">{artist.respectCount} Respect</p>
              </div>
            ))}
          </div>
        </div>

        {/* E) En Çok Respect Gönderdiği Şarkılar */}
        <div className="user-section">
          <h2 className="section-title">En Çok Desteklediği Şarkılar</h2>
          <div className="top-songs-list">
            {topSongs.map((song) => (
              <div key={song.id} className="song-item">
                <div className="song-cover">
                  <img src={song.cover} alt={song.name} />
                </div>
                <div className="song-info">
                  <h3 className="song-name">{song.name}</h3>
                  <p className="song-artist">{song.artist}</p>
                </div>
                <div className="song-respect-count">
                  {song.respectCount} Respect
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* F) Profile Edit Modal */}
      {showEditModal && (
        <div className="profile-edit-modal" onClick={handleCloseModal}>
          <div className="profile-edit-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Profili Düzenle</h2>
              <button className="modal-close" onClick={handleCloseModal}>×</button>
            </div>
            
            <form className="edit-form" onSubmit={handleSaveProfile}>
              <div className="form-group">
                <label className="form-label">İsim</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Adınızı girin"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  placeholder="Kendinizi tanıtın..."
                />
              </div>
              
              <div className="form-group">
                <div className="respect-visibility">
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="respectVisible"
                      checked={formData.respectVisible}
                      onChange={handleInputChange}
                      className="form-checkbox"
                    />
                  </div>
                  <label className="form-label">Respect sayımı göster</label>
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  İptal
                </button>
                <button type="submit" className="save-btn">
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserPage 