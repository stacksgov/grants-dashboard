import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET
		})
		// add more providers here if needed
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token, user }) {
			const regex = /(?<=\/u\/)(.*)(?=\?)/g;
			const githubUserId = session.user.image.match(regex);

			let res = await fetch('https://api.github.com/user/' + githubUserId);

			user = await res.json();

			session.user.name = user.login ? user.login : '';
			session.accessToken = token.accessToken;
			return session;
		}
	}
};

export default NextAuth(authOptions);
