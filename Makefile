install:
	npm ci
brain-games:
	node	games/brainGames.js
brain-calc:
	node	bin/brain-calc.js
brain-even:
	node	bin/brain-even.js
brain-gcd:
	node	bin/brain-gcd.js
brain-prime:
	node	bin/brain-prime.js
brain-progression:
	node	bin/brain-progression.js
link:
	npm	link
publish:
	npm publish --dry-run
lint:
	npx eslint .