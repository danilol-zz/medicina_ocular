class PageMailer < ActionMailer::Base
    default :to => "seuemail@gmail.com"

    def send_mail(user)
      @site = "http://www.medicinaocular.com.br"
      mail(:from => user[:email],
           :body => "Nome: #{user[:nome]} Tel: #{user[:telefone]}, Data: #{user[:data]}\n #{user[:message]}",
           :subject => "Contato Medicina Ocular")
    end

end
