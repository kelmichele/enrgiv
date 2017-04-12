class LinksController < ApplicationController
	def fb
	    redirect_to('https://www.facebook.com/enrgiv/')
	end

	def insta
		redirect_to('https://www.instagram.com/suemeyers2457/')
	end

	def hsdh
		redirect_to('https://hsdesignhouse.com')
	end
end
