class PageMailer < ActionMailer::Base
    default :from => "seuemail@gmail.com"

    def send_mail(user)
      @site = "http://www.medicinaocular.com.br"
      mail(:to => user[:email],
           :body => "#{user[:telefone]}, #{user[:data]}",
           :subject => "Contato Medicina Ocular")
    end

end
