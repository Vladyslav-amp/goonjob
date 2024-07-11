document.addEventListener('DOMContentLoaded', function () {
  const partnerName = document.getElementById('partner-name');
  const partnerJob = document.getElementById('partner-job');
  const partnerDescription = document.getElementById('partner-description');
  const partnerImage = document.getElementById('partners-logo');

  //Set default
  partnerName.textContent = 'Tom Dou';
  partnerJob.textContent = 'Front-End';
  partnerDescription.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';

  const cards = document.querySelectorAll('.partners-content__cards-item');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const partner = card.getAttribute('data-partner');
      switch (partner) {
        case 'STU PARTNERS':
          partnerImage.src = 'public/image/Avatar.svg'
          partnerName.textContent = 'STU PARTNERS';
          partnerJob.textContent = 'Back-End';
          partnerDescription.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';
          break;
        case 'Breck Partners':
          partnerImage.src = 'public/image/Avatar.svg'
          partnerName.textContent = 'Breck Partners';
          partnerJob.textContent = 'ML Specialist';
          partnerDescription.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';
          break;
        case 'SUNSTONE PARTNERS':
          partnerImage.src = 'public/image/Avatar.svg'
          partnerName.textContent = 'SUNSTONE PARTNERS';
          partnerJob.textContent = 'Full-stack';
          partnerDescription.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';
          break;
        case 'THE ATHENA CONSULTANTS':
          partnerImage.src = 'public/image/Avatar.svg'
          partnerName.textContent = 'THE ATHENA CONSULTANTS';
          partnerJob.textContent = 'Java Developer';
          partnerDescription.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';
          break;
        case 'CHORD freshly COMPANY':
          partnerImage.src = 'public/image/Avatar.svg'
          partnerName.textContent = 'CHORD freshly COMPANY';
          partnerJob.textContent = 'Team-lead';
          partnerDescription.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';
          break;
        default:
          partnerImage.src = 'public/image/Avatar.svg'
          partnerName.textContent = 'Tom Dou';
          partnerJob.textContent = 'Front-End';
          partnerDescription.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';
          break;
      }
    });
  });
});