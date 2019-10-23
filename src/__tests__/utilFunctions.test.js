// npm install --save-dev @testing-library/react

import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

it('tests shortenText to make sure it will NOT alter strings under a 100 charcaters and add ... at the end', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});


it('shortenText should cut off extra characters after 100 and add three periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

it('wordCount should count the words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})

it('attachUserName user name correctly', () => {
    const newPost = attachUserName(users, posts)
    expect(newPost[0]).toHaveProperty('displayName');
})

it('attachUserName delete correct post', () => {
    const newPost = attachUserName(users, posts)
    const badPost = posts[5];
    expect(newPost).not.toContainEqual(badPost)
})