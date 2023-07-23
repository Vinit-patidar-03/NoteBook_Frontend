import React from 'react'

function About() {
  return (
    <>
      <div className=' d-flex flex-column align-items-center mt-2'>
        <h4>Welcome to NotesSaver - Your Personal Note-saving Web App</h4>
        <h6 style={{color: 'gray'}}>Your One-stop Solution for Organizing and Managing Your Notes</h6>
      </div>
      <div className=' my-3'>
        <h4>About NotesSaver: </h4>
        <p>NoteKeep is a powerful and intuitive web application designed to simplify your note-taking experience. Whether you're a student, professional, or just someone who loves jotting down thoughts, NoteKeep is here to help you capture and organize your ideas effortlessly.</p>
      </div>
      <div className=' my-3'>
        <h4>Our Mission: </h4>
        <p>At NoteKeep, our mission is to empower you to stay organized and focused. We understand that life can be fast-paced and chaotic, and important thoughts or information can slip through the cracks. Our web app is built with the goal of providing a seamless and efficient note-taking platform, ensuring you never lose track of essential ideas again.</p>
      </div>
      <div className=' my-3'>
        <h4>Key Features: </h4>
        <p>
          <span className='fw-bold me-2'> 1) User-friendly Interface:</span>
          We believe simplicity is key. NoteKeep boasts an intuitive and user-friendly interface, making it easy for you to create, view, and manage your notes without any hassle.
        </p>
        <p>
          <span className='fw-bold me-2'> 2) Secure Data Storage:</span>
           We take your privacy seriously. Your notes are stored securely, and we employ industry-standard encryption protocols to safeguard your information.
        </p>
      </div>
    </>
  )
}

export default About