// DropDown One

document.querySelectorAll('.dropdown-btn').forEach((btn, index) => {
  if (index === 0) {
    btn.classList.add('active');
    const content = btn.nextElementSibling;
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
  btn.addEventListener('click', () => {
    const active = document.querySelector('.dropdown-btn.active');
    if (active && active !== btn) {
      active.classList.remove('active');
      active.nextElementSibling.style.maxHeight = 0;
    }
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.style.maxHeight = btn.classList.contains('active')
      ? `${content.scrollHeight}px`
      : 0;
  });
});

document.querySelectorAll('.dropdown-child-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.style.maxHeight = btn.classList.contains('active')
      ? `${content.scrollHeight}px`
      : 0;

    // Update the main dropdown content height
    const parentContent = btn.closest('.dropdown-content');
    if (parentContent) {
      const activeChild = parentContent.querySelector(
        '.dropdown-child-btn.active'
      );
      if (btn.classList.contains('active')) {
        parentContent.style.maxHeight = `${
          parentContent.scrollHeight + content.scrollHeight
        }px`;
      } else {
        parentContent.style.maxHeight = `${
          parentContent.scrollHeight - content.scrollHeight
        }px`;
      }
    }
  });
});

// DropDown Two
document.querySelectorAll('.dropdown-btn2').forEach((btn2, index) => {
  if (index === 0) {
    btn2.classList.add('active');
    const content2 = btn2.nextElementSibling;
    content2.style.maxHeight = `${content2.scrollHeight}px`;
  }
  btn2.addEventListener('click', () => {
    const active = document.querySelector('.dropdown-btn2.active');
    if (active && active !== btn2) {
      active.classList.remove('active');
      active.nextElementSibling.style.maxHeight = 0;
    }
    btn2.classList.toggle('active');
    const content2 = btn2.nextElementSibling;
    content2.style.maxHeight = btn2.classList.contains('active')
      ? `${content2.scrollHeight}px`
      : 0;
  });
});

document.querySelectorAll('.dropdown-child-btn2').forEach((btn2) => {
  btn2.addEventListener('click', () => {
    btn2.classList.toggle('active');
    const content2 = btn2.nextElementSibling;
    content2.style.maxHeight = btn2.classList.contains('active')
      ? `${content2.scrollHeight}px`
      : 0;

    // Update the main dropdown content height
    const parentContent2 = btn2.closest('.dropdown-content2');
    if (parentContent2) {
      const activeChild = parentContent2.querySelector(
        '.dropdown-child-btn2.active'
      );
      if (btn2.classList.contains('active')) {
        parentContent2.style.maxHeight = `${
          parentContent2.scrollHeight + content2.scrollHeight
        }px`;
      } else {
        parentContent2.style.maxHeight = `${
          parentContent2.scrollHeight - content2.scrollHeight
        }px`;
      }
    }
  });
});
