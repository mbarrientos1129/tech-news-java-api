async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/') - 1
    ];

    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE'
    });

    if (response.ok){
    document.location.replace('/dashboard/')
    } else {
    alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn'). addEventListener('click', deleteFormHandler);