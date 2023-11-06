install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node	bin/brain-calc.js
brain-even:
	node	bin/brain-even.js
brain-gcd:
	node	brain-gcd.js
brain-prime:
	node	brain-prime.js
brain-progression:
	node	brain-progression.js
link:
	npm	link
publish:
	npm publish --dry-run
lint:
	npx eslint .