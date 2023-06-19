const modal = () => {
  const modalPopup = document.querySelector(".modal-callback");
  const buttons = document.querySelectorAll(".hidden-xs");
  const closeBtn = document.querySelector(".modal-close");
  const overlay = document.querySelector(".modal-overlay");

  const isMobile = window.innerWidth < 768;

  const showModal = () => {
    modalPopup.style.display = "block";
    overlay.style.display = "block";
    if (!isMobile) {
      animateModal(0, 1);
    }
  };

  const hideModal = () => {
    if (!isMobile) {
      animateModal(1, 0, () => {
        modalPopup.style.display = "none";
        overlay.style.display = "none";
      });
    } else {
      modalPopup.style.display = "none";
      overlay.style.display = "none";
    }
  };

  const animateModal = (start, end, callback) => {
    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const opacity = start + (end - start) * progress;

      modalPopup.style.opacity = opacity;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (typeof callback === "function") {
          callback();
        }
      }
    };

    requestAnimationFrame(animate);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", showModal);
  });

  closeBtn.addEventListener("click", hideModal);
  overlay.addEventListener("click", hideModal);
};

export default modal;
