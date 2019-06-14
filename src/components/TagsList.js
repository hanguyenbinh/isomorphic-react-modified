import React from 'react';
export default ({tags})=>(
    <div>
        {tags.map(tag=><code key={tag.oid}>{tag.name}</code>)}
    </div>
)