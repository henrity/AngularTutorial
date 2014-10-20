(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',   //Type of directive ('E' for element, we are declaring a new html element) ((A if it had been an atribute))
			templateUrl: 'product-title.html'
		};
	});

	var gems = [
		{
			name: 'Blue Shirt',
			price: 2,
			description: 'apzoijazoijd aziepjdaoziej',
			canPurchase: true,
			image: 'img/blue_shirt.png',
			specifications: 'Not Yet, Sorry!',
			reviews: [
				{
					stars: 5,
					body: "very good product!",
					author: "jean@gmail.com"
				},
				{
					stars: 3,
					body: "average product",
					author: "tom@gmail.com"
				}
			]
		},
		{
			name: 'Green Shirt',
			price: 3.87,
			description: 'afzefzefe ,azkd, oziej',
			canPurchase: true,
			image: 'img/green_shirt.jpeg',
			specifications: 'Not Yet, Sorry!',
			reviews: [
				{
					stars: 1,
					body: "awful product!",
					author: "Mike@gmail.com"
				},
				{
					stars: 3,
					body: "average product",
					author: "tom@gmail.com"
				}
			]
		},
		{
			name: 'Pink Shirt',
			price: 7.94,
			description: 'zdzed ,ik, epjdaoziej',
			canPurchase: true,
			image: 'img/pink_shirt.png',
			specifications: 'Not Yet, Sorry!',
			reviews: [
				{
					stars: 5,
					body: "very good product!",
					author: "Jameson@gmail.com"
				},
				{
					stars: 3,
					body: "average product",
					author: "Diana@gmail.com"
				},
				{
					stars: 2,
					body: "pretty bad.",
					author: "Jack@gmail.com"
				}
			]
		}
	];

})();
	