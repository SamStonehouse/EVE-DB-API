class evedb {

	class { '::mysql::server':
		root_password    => 'root',
		override_options => { 'mysqld' => { 'max_connections' => '1024' } }
	}

	mysql::db { 'evedb':
		user     => 'eveuser',
		password => 'secret',
		host     => 'master.puppetlabs.vm',
		sql        => '/vagrant/puppet/files/evedb.sql',
		require => File['/vagrant/puppet/files/evedb.sql'],
	}

	file { "/vagrant/puppet/files/evedb.sql":
		ensure => present,
	}

	mysql_user { 'eveuser@localhost':
		ensure                   => 'present',
		max_user_connections     => '10',
	}

	mysql_grant { 'eveuser@localhost/evedb.*':
		ensure     => 'present',
		options    => ['GRANT'],
		privileges => ['ALL'],
		table      => 'evedb.*',
		user       => 'eveuser@localhost',
	}
}