{:dev
  {:env
    { :production "false"
      :database-dbname "shed"
      :database-host "localhost"
      :database-user "postgres"
      :database-password ""
      :database-sslmode "disable"}
  }
 :production
  {:env
    { :production "true"
      :database-dbname "d4iq187en6e304"
      :database-host "ec2-54-163-227-253.compute-1.amazonaws.com"
      :database-user ""
      :database-password ""}
      :database-sslmode "require"
  }
}
