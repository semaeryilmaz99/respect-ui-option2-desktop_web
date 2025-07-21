import React, { useState, useEffect } from 'react'

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0)

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

  const steps = [
    {
      id: 0,
      title: "Respect",
      subtitle: "Müzik severlerin sanatçılarını desteklediği yeni nesil platform",
      description: "Respect, müzik endüstrisinde sanatçı ve hayran arasındaki bağı güçlendiren, değer odaklı bir sosyal müzik platformudur. Sevdiğiniz sanatçılara destek olun, onlarla doğrudan iletişim kurun ve müziğin gerçek değerini keşfedin.",
      buttonText: "Devam Et"
    },
    {
      id: 1,
      title: "Nasıl Çalışır?",
      subtitle: "3 basit adımda Respect deneyimini keşfedin",
      description: "Respect'te her etkileşim değerlidir. Sanatçıları desteklemek, onlarla sohbet etmek ve müzik topluluğunun bir parçası olmak hiç bu kadar kolay olmamıştı.",
      buttonText: "Anladım"
    },
    {
      id: 2,
      title: "Hemen Başlayalım!",
      subtitle: "Müzik yolculuğunuza Respect ile başlayın",
      description: "Artık Respect topluluğunun bir üyesisiniz. Sevdiğiniz sanatçıları keşfedin, destekleyin ve müziğin büyülü dünyasında anlamlı bağlantılar kurun.",
      buttonText: "Uygulamayı Kullanmaya Başla"
    }
  ]

  const howtoSteps = [
    {
      number: "1",
      title: "Keşfet ve Dinle",
      description: "Sevdiğiniz sanatçıları bulun, şarkılarını dinleyin ve müzik kütüphanenizi oluşturun."
    },
    {
      number: "2", 
      title: "Respect Gönder",
      description: "Beğendiğiniz şarkı ve sanatçılara respect göndererek desteğinizi gösterin ve onları motive edin."
    },
    {
      number: "3",
      title: "Toplulukla Etkileş",
      description: "Sanatçılarla ve diğer müzik severlerle sohbet edin, deneyimlerinizi paylaşın."
    }
  ]

  const communityFeatures = [
    {
      title: "Sanatçı Etkileşimi",
      description: "Sevdiğiniz sanatçılarla doğrudan iletişim kurun, özel mesajlar alın ve müzik süreçlerine tanık olun."
    },
    {
      title: "Respect Sistemi",
      description: "Respect göndererek sanatçıları destekleyin, onların yaratıcılığını teşvik edin ve değerini gösterin."
    },
    {
      title: "Müzik Topluluğu",
      description: "Aynı müzik zevkine sahip insanlarla tanışın, playlist'ler paylaşın ve müzik sohbetleri yapın."
    },
    {
      title: "Özel İçerikler",
      description: "Respect gönderdiğiniz sanatçıların özel içeriklerine erişin, backstage anlarını yaşayın."
    }
  ]

  const getStepStatus = (stepIndex) => {
    if (stepIndex === currentStep) return 'active'
    if (stepIndex < currentStep) return 'completed'
    return 'pending'
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Navigate to main app
      console.log('Onboarding completed!')
    }
  }

  const currentStepData = steps[currentStep]

  return (
    <div className="onboarding-page">
      <div className="onboarding-inner">
        {/* Progress Steps */}
        <div className="onboarding-progress">
          {steps.map((_, index) => (
            <div key={index} className="progress-step">
              <div className={`step-circle ${getStepStatus(index)}`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>

        {/* Floating Decorations */}
        <div className="onboarding-decoration">
          <div className="onb-decoration-circle onb-circle-1"></div>
          <div className="onb-decoration-circle onb-circle-2"></div>
          <div className="onb-decoration-circle onb-circle-3"></div>
          <div className="onb-decoration-circle onb-circle-4"></div>
        </div>

        <div className="onboarding-content">
        
        {/* Step 1: Introduction */}
        {currentStep === 0 && (
          <div className="step-introduction">
            <div className="intro-content">
              <h1 className="onb-title">{currentStepData.title}</h1>
              <p className="onb-subtitle">{currentStepData.subtitle}</p>
              <p className="onb-description">{currentStepData.description}</p>
              <button className="onb-button" onClick={handleNext}>
                {currentStepData.buttonText}
              </button>
            </div>
            <div className="intro-visual">
              <div className="respect-logo-large">RESPECT</div>
            </div>
          </div>
        )}

        {/* Step 2: How It Works */}
        {currentStep === 1 && (
          <div className="step-howto">
            <div className="intro-content">
              <h1 className="onb-title">{currentStepData.title}</h1>
              <p className="onb-subtitle">{currentStepData.subtitle}</p>
              <p className="onb-description">{currentStepData.description}</p>
            </div>
            
            <div className="howto-grid">
              {howtoSteps.map((step, index) => (
                <div key={index} className="howto-card">
                  <div className="howto-number">{step.number}</div>
                  <h3 className="howto-title">{step.title}</h3>
                  <p className="howto-description">{step.description}</p>
                </div>
              ))}
            </div>

            <button className="onb-button" onClick={handleNext}>
              {currentStepData.buttonText}
            </button>
          </div>
        )}

        {/* Step 3: Get Started */}
        {currentStep === 2 && (
          <div className="step-getstarted">
            <div className="getstarted-hero">
              <h1 className="onb-title">{currentStepData.title}</h1>
              <p className="onb-subtitle">{currentStepData.subtitle}</p>
              <p className="onb-description">{currentStepData.description}</p>
            </div>

            <div className="respect-community">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="community-feature">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              <button className="onb-button" onClick={handleNext}>
                {currentStepData.buttonText}
              </button>
              <button className="onb-button secondary" onClick={() => setCurrentStep(0)}>
                Tekrar İzle
              </button>
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  )
}

export default OnboardingPage 