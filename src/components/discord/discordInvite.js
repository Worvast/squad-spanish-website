const apiUrl = 'https://discordapp.com/api/v6/invite/';
const apiEnd = '?with_counts=true';

const fetchDetail = (inviteId) =>
    fetch(apiUrl+inviteId+apiEnd)
        .then(res => res.json());

export { fetchDetail };
