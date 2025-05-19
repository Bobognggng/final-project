import React, { useState } from 'react';

const ThreadPage = () => {
  const [threads, setThreads] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddThread = () => {
    if (title.trim() && content.trim()) {
      const newThread = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
      };
      setThreads([newThread, ...threads]);
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteThread = (id) => {
    setThreads(threads.filter((thread) => thread.id !== id));
  };

  return (
    <div id='thread-page-container'>
        <div id='thread-page'>
            <div id='ha'>Discussions</div>
            <div id='create-thread-title'>Thread title</div>
            <input id='thread-title-input' onChange={(e) => setTitle(e.target.value)}/>
            <div id='create-thread-title'>Content</div>
            <input id='thread-input' onChange={(e) => setContent(e.target.value)}/>
            <button id='post-thread-button' onClick={handleAddThread}>
                Post Thread
            </button>
            <hr />
            <div className="space-y-4">
                {threads.map((thread) => (
                <div key={thread.id}>
                    <div id='thread-ha'>
                        <h3 id='thread-title'>{thread.title}</h3>
                        <button id='thread-delete-button' onClick={() => handleDeleteThread(thread.id)}>
                            Delete
                        </button>
                    </div>
                    <p id='thread'>{thread.content}</p>
                </div>
                ))}

                {threads.length === 0 && (
                    <p id='thread'>No threads yet.</p>
                )}
            </div>
        </div>
    </div>
  );
};

export default ThreadPage;